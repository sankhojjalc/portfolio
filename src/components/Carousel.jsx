import { Children, useCallback, useEffect, useRef, useState } from "react";

import Icon from "./Icons";

/**
 * Generic looping scroll-snap carousel.
 *
 * Layout is driven entirely by CSS scroll-snap, so the number of slides is
 * never baked into the markup - add data, not styles. Everything moves one
 * slide at a time, whatever the breakpoint shows: a slide enters on the right
 * as one leaves on the left, rather than swapping a whole screenful at once.
 *
 * Looping works by rendering the slide list COPIES times and parking the track
 * on the middle copy. Once scrolling settles, the track is silently moved back
 * by exactly one copy width whenever it strays into an outer copy. Every copy
 * is identical, so that jump is invisible - the carousel simply never reaches
 * an end, whether it is driven by a swipe, the arrows, the dots or autoplay.
 */
const COPIES = 3;
// How long the track must be still before it is safe to recentre it.
const SETTLE_DELAY = 150;

// Move the track without animating, whatever scroll-behavior the CSS asks for.
const jumpTo = (track, left) => {
  const previous = track.style.scrollBehavior;
  track.style.scrollBehavior = "auto";
  track.scrollLeft = left;
  track.style.scrollBehavior = previous;
};

// One "set" is a single copy of the slide list; one slide is a set / slideCount.
// Deriving both from scrollWidth keeps this correct at every breakpoint without
// measuring individual elements.
const geometryOf = (track, looping, slideCount) => {
  const setWidth = track.scrollWidth / (looping ? COPIES : 1);

  return {
    setWidth,
    slideWidth: setWidth / slideCount,
    maxScroll: track.scrollWidth - track.clientWidth,
  };
};

const Carousel = ({
  ariaLabel,
  autoPlayDelay = 0,
  paused = false,
  children,
}) => {
  const rootRef = useRef(null);
  const trackRef = useRef(null);
  const settleTimer = useRef(null);

  const slides = Children.toArray(children);
  const slideCount = slides.length;

  const [isLooping, setIsLooping] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isOnScreen, setIsOnScreen] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const copies = isLooping ? COPIES : 1;

  const sync = useCallback(() => {
    const track = trackRef.current;
    if (!track || track.clientWidth === 0 || slideCount === 0) return;

    const { setWidth, slideWidth } = geometryOf(track, isLooping, slideCount);

    setIsLooping(setWidth > track.clientWidth + 1);
    setActiveIndex(
      Math.round((track.scrollLeft % setWidth) / slideWidth) % slideCount,
    );
  }, [isLooping, slideCount]);

  const recentre = useCallback(() => {
    const track = trackRef.current;
    if (!track || !isLooping) return;

    const setWidth = track.scrollWidth / COPIES;
    const { scrollLeft } = track;

    if (scrollLeft < setWidth * 0.5) jumpTo(track, scrollLeft + setWidth);
    else if (scrollLeft > setWidth * 1.5) jumpTo(track, scrollLeft - setWidth);
  }, [isLooping]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      sync();
      clearTimeout(settleTimer.current);
      settleTimer.current = setTimeout(recentre, SETTLE_DELAY);
    };

    sync();
    track.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new ResizeObserver(sync);
    observer.observe(track);

    return () => {
      clearTimeout(settleTimer.current);
      track.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [sync, recentre, slideCount]);

  // Park on the middle copy as soon as looping turns on.
  useEffect(() => {
    const track = trackRef.current;
    if (!track || !isLooping) return;
    jumpTo(track, track.scrollWidth / COPIES);
  }, [isLooping, slideCount]);

  // The outer copies are duplicates: keep them clickable, but hide them from
  // screen readers and skip them when tabbing.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    Array.from(track.children).forEach((slide, index) => {
      const isClone =
        isLooping && (index < slideCount || index >= slideCount * 2);

      if (isClone) slide.setAttribute("aria-hidden", "true");
      else slide.removeAttribute("aria-hidden");

      slide.querySelectorAll("button, a, [tabindex]").forEach((element) => {
        element.tabIndex = isClone ? -1 : 0;
      });
    });
  }, [isLooping, slideCount]);

  // Only autoplay while the carousel is actually on screen.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsOnScreen(entry.isIntersecting),
      { threshold: 0.3 },
    );
    observer.observe(root);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(query.matches);

    update();
    query.addEventListener("change", update);

    return () => query.removeEventListener("change", update);
  }, []);

  const scrollBySlide = useCallback(
    (direction) => {
      const track = trackRef.current;
      if (!track || slideCount === 0) return;

      const { setWidth, slideWidth, maxScroll } = geometryOf(
        track,
        isLooping,
        slideCount,
      );

      // Recentre first if this step would run off an end, so the smooth scroll
      // that follows always has a full slide of track in front of it.
      if (isLooping) {
        const target = track.scrollLeft + direction * slideWidth;

        if (target < 0) jumpTo(track, track.scrollLeft + setWidth);
        else if (target > maxScroll) jumpTo(track, track.scrollLeft - setWidth);
      }

      track.scrollBy({ left: direction * slideWidth, behavior: "smooth" });
    },
    [isLooping, slideCount],
  );

  const scrollToSlide = (index) => {
    const track = trackRef.current;
    if (!track || slideCount === 0) return;

    const { setWidth, slideWidth } = geometryOf(track, isLooping, slideCount);
    const base = isLooping ? setWidth : 0;

    track.scrollTo({ left: base + index * slideWidth, behavior: "smooth" });
  };

  const isAutoPlaying =
    autoPlayDelay > 0 &&
    isLooping &&
    isOnScreen &&
    !paused &&
    !isInteracting &&
    !reduceMotion;

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      // A hidden tab neither animates nor fires scroll events, so advancing
      // there would only pile up unseen slides.
      if (document.visibilityState === "visible") scrollBySlide(1);
    }, autoPlayDelay);

    return () => clearInterval(timer);
  }, [isAutoPlaying, autoPlayDelay, scrollBySlide]);

  const renderedSlides = [];
  for (let copy = 0; copy < copies; copy += 1) {
    slides.forEach((slide, index) => {
      renderedSlides.push(
        <div
          key={`${copy}-${index}`}
          className="shrink-0 snap-start w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-3"
        >
          {slide}
        </div>,
      );
    });
  }

  // Arrows stay out of the way until the carousel is hovered. Pointers that
  // cannot hover never get that cue, so there they are simply always visible.
  const arrowStyle =
    "absolute top-1/2 -translate-y-1/2 z-10 rounded-full bg-backgroundColor text-textColor p-2 shadow-lg hover:bg-hoverBackgroundColor " +
    "opacity-0 pointer-events-none transition-opacity duration-200 " +
    "group-hover/carousel:opacity-100 group-hover/carousel:pointer-events-auto " +
    "focus-visible:opacity-100 focus-visible:pointer-events-auto " +
    "[@media(hover:none)]:opacity-100 [@media(hover:none)]:pointer-events-auto";

  return (
    <div
      ref={rootRef}
      className="group/carousel relative"
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
      onFocusCapture={() => setIsInteracting(true)}
      onBlurCapture={() => setIsInteracting(false)}
      onTouchStart={() => setIsInteracting(true)}
      onTouchEnd={() => setIsInteracting(false)}
    >
      {isLooping && (
        <button
          type="button"
          className={`${arrowStyle} left-0 -translate-x-1/4 md:-translate-x-1/2`}
          onClick={() => scrollBySlide(-1)}
          aria-label="Previous company"
        >
          <Icon iconName="chevronLeftIcon" />
        </button>
      )}

      <div
        ref={trackRef}
        tabIndex={0}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth motion-reduce:scroll-auto -mx-3 py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {renderedSlides}
      </div>

      {isLooping && (
        <button
          type="button"
          className={`${arrowStyle} right-0 translate-x-1/4 md:translate-x-1/2`}
          onClick={() => scrollBySlide(1)}
          aria-label="Next company"
        >
          <Icon iconName="chevronRightIcon" />
        </button>
      )}

      {isLooping && slideCount > 1 && (
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`h-2.5 w-2.5 rounded-full border border-textColor ${
                index === activeIndex ? "bg-textColor" : "bg-transparent"
              }`}
              onClick={() => scrollToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === activeIndex}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;

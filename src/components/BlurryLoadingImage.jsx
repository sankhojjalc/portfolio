import { useEffect, useState } from "react";

const BlurryLoadingImage = ({
  preview,
  image,
  alt,
  width,
  height,
  eager = false,
  imageStyleClass,
  divStyleClass,
  bgColor = "transparent",
}) => {
  const [currentImage, setCurrentImage] = useState(preview);
  const [loading, setLoading] = useState(preview !== image);

  const fetchImage = (src) => {
    const loadingImage = new Image();
    loadingImage.src = src;
    loadingImage.onload = () => {
      setCurrentImage(loadingImage.src);
      setLoading(false);
    };
  };

  useEffect(() => {
    if (preview === image) return;
    fetchImage(image);
  }, [preview, image]);

  return (
    <div className={divStyleClass} style={{ overflow: "hidden" }}>
      <img
        style={{
          filter: `${loading ? "blur(10px)" : ""}`,
          transition: "0.25s filter linear",
          width: "100%",
          background: bgColor,
        }}
        src={currentImage}
        alt={alt}
        width={width}
        height={height}
        // The hero portrait is the LCP element - it must not be lazy-loaded.
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        decoding={eager ? "sync" : "async"}
        className={imageStyleClass}
      />
    </div>
  );
};

export default BlurryLoadingImage;

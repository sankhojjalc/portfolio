import { act, renderHook } from "@testing-library/react";
import { useTypewriter } from "@/lib/hooks/useTypewriter";

describe("useTypewriter", () => {
  beforeEach(() => jest.useFakeTimers());
  afterEach(() => jest.useRealTimers());

  it("reveals the text one character at a time and reports when it is done", () => {
    const { result } = renderHook(() => useTypewriter("Hi!", 10));

    expect(result.current).toEqual({ displayText: "", isDone: false });

    act(() => jest.advanceTimersByTime(10));
    expect(result.current.displayText).toBe("H");

    act(() => jest.advanceTimersByTime(20));
    expect(result.current).toEqual({ displayText: "Hi!", isDone: true });
  });

  it("stops ticking once the text is complete", () => {
    const { result } = renderHook(() => useTypewriter("Go", 10));

    act(() => jest.advanceTimersByTime(500));

    expect(result.current.displayText).toBe("Go");
    expect(jest.getTimerCount()).toBe(0);
  });
});

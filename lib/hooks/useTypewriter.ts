import { useEffect, useState } from "react";

export function useTypewriter(text: string, speedMs = 30) {
  const [length, setLength] = useState(0);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index += 1;
      setLength(index);
      if (index >= text.length) clearInterval(interval);
    }, speedMs);
    return () => clearInterval(interval);
  }, [text, speedMs]);

  return { displayText: text.slice(0, length), isDone: length >= text.length };
}

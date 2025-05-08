import { useEffect, useState, RefObject } from "react";

export type ScrollDirection = "up" | "down";

interface UseAutoScrollOptions {
  initialDirection?: ScrollDirection;
  scrollSpeed?: number;
  externalDirection?: ScrollDirection;
  setExternalDirection?: (dir: ScrollDirection) => void;
  externalIsHovered?: boolean;
}

export const useAutoVerticalScroll = (
  containerRef: RefObject<HTMLDivElement | null>,
  options?: UseAutoScrollOptions
) => {
  const {
    initialDirection = "down",
    scrollSpeed = 1,
    externalDirection,
    setExternalDirection,
    externalIsHovered,
  } = options || {};

  const [internalDirection, setInternalDirection] =
    useState<ScrollDirection>(initialDirection);
  const [internalIsHovered, setInternalIsHovered] = useState(false);

  const direction = externalDirection ?? internalDirection;
  const setDirection = setExternalDirection ?? setInternalDirection;
  const isHovered = externalIsHovered ?? internalIsHovered;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scroll = () => {
      if (!container || isHovered) return;

      const atTop = container.scrollTop <= 0;
      const atBottom =
        container.scrollTop + container.clientHeight >= container.scrollHeight;

      if (atBottom) {
        setDirection("up");
      } else if (atTop) {
        setDirection("down");
      }

      if (direction === "down") {
        container.scrollTop += scrollSpeed;
      } else {
        container.scrollTop -= scrollSpeed;
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, [direction, isHovered, scrollSpeed, containerRef]);

  return {
    onMouseEnter: () => setInternalIsHovered(true),
    onMouseLeave: () => setInternalIsHovered(false),
  };
};

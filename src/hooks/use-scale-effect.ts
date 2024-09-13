// hooks/useScaleEffect.js
import { useState, useEffect } from "react";

export function useScaleEffect(initialPercentage = 0) {
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState(0);

  useEffect(() => {
    function getScale() {
      const WINDOW_TOP_OFFSET = 26;
      return (window.innerWidth - WINDOW_TOP_OFFSET) / window.innerWidth;
    }

    function updateScale() {
      const baseScale = getScale();
      const scaleValue = Math.min(
        baseScale + initialPercentage * (1 - baseScale),
        1,
      );
      const translateValue = Math.max(0, 14 - initialPercentage * 14);
      setScale(scaleValue);
      setTranslate(translateValue);
    }

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [initialPercentage]);

  return { scale, translate };
}

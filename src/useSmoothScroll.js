import { useCallback, useEffect, useRef } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function useSmoothScroll(pathname) {
  const instance = useRef(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!window.location.hash) window.scrollTo({ top: 0, behavior: "instant" });

    const updateMotion = () => {
      instance.current?.destroy();
      instance.current = reducedMotion.matches ? null : new Lenis({
        duration: 2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        syncTouch: false,
        autoRaf: true,
      });
    };

    updateMotion();
    reducedMotion.addEventListener("change", updateMotion);
    return () => {
      reducedMotion.removeEventListener("change", updateMotion);
      instance.current?.destroy();
      instance.current = null;
    };
  }, [pathname]);

  return useCallback((element) => {
    if (instance.current) {
      instance.current.scrollTo(element);
    } else {
      element.scrollIntoView({ behavior: "instant" });
    }
  }, []);
}

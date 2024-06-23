import { animate, useInView, useIsomorphicLayoutEffect } from "framer-motion";
import { useRef } from "react";
import propTypes from "prop-types";

const AnimatedCounter = ({ from = 0, to, duration = 1, animationOptions }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;
    if (!inView) return;

    element.textContent = `${from} K`;

    if (window.matchMedia("(prefers-reduced-motion)").matches) {
      element.textContent = `${to} K`;
      return;
    }

    const controls = animate(from, to, {
      duration,
      ease: "easeOut",
      ...animationOptions,

      onUpdate(value) {
        element.textContent = `${value.toFixed(0)}K`;
      },
    });

    return () => {
      controls.stop();
    };
  }, [ref, inView, from, to, duration, animationOptions]);

  return <span ref={ref} className="text-xl" />;
};

AnimatedCounter.propTypes = {
  from: propTypes.number,
  to: propTypes.number,
  duration: propTypes.number,
  animationOptions: propTypes.any,
};

export default AnimatedCounter;

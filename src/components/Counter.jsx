import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

const Counter = () => {
  const count = useMotionValue(0);
  const roundedValue = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 2 });

    return animation.stop;
  }, []);
  return (
    <motion.div className="m-4 text-2xl font-bold">{roundedValue}</motion.div>
  );
};

export default Counter;

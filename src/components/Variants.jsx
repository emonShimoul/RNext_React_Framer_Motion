import { motion } from "motion/react";

const shapeVariants = {
  initial: {
    opacity: 0,
    y: "-100vh",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      duration: 1,
      type: "spring",
    },
  },
};

const childVariants = {
  initial: {
    scale: 0.5,
  },
  animate: {
    scale: 1.5,
    transition: {
      duration: 3,
    },
  },
};

const Variants = () => {
  return (
    <motion.div
      variants={shapeVariants}
      initial="initial"
      animate="animate"
      className="bg-green-700 w-32 h-32 rounded border m-4"
    >
      <motion.div
        className="bg-red-500 w-12 h-12 rounded-full border m-10"
        variants={childVariants}
      />
    </motion.div>
  );
};

export default Variants;

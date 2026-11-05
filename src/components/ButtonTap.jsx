import { motion } from "motion/react";

const ButtonTap = () => {
  return (
    <div>
      <motion.button
        className="bg-black text-white p-1 border m-2 rounded-md"
        whileTap={{ scale: 0.5 }}
        whileHover={{
          scale: 1.4,
        }}
      >
        Tap Me
      </motion.button>

      <motion.button
        className="bg-blue-500 text-white p-1 border m-2 rounded-md"
        whileTap={{ scale: 0.5 }}
        whileHover={{
          scale: 1.4,
          transition: { yoyo: Infinity },
        }}
      >
        Tap Me 2
      </motion.button>
    </div>
  );
};

export default ButtonTap;

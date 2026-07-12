"use client";

import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export default function ScrollIndicator() {
  return (
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{
        repeat: Infinity,
        duration: 1.5,
      }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <FaChevronDown
        className="text-white text-3xl opacity-80"
      />
    </motion.div>
  );
}
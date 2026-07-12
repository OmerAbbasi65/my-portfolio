"use client";

import { motion } from "framer-motion";

export default function FloatingShapes() {
  const circles = [
    {
      size: 120,
      left: "10%",
      top: "15%",
      delay: 0,
    },
    {
      size: 70,
      left: "75%",
      top: "20%",
      delay: 1,
    },
    {
      size: 160,
      left: "65%",
      top: "70%",
      delay: 2,
    },
    {
      size: 90,
      left: "20%",
      top: "75%",
      delay: 3,
    },
    {
      size: 60,
      left: "45%",
      top: "35%",
      delay: 4,
    },
  ];

  return (
    <>
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-blue-400/20 blur-3xl"
          style={{
            width: circle.size,
            height: circle.size,
            left: circle.left,
            top: circle.top,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: circle.delay,
          }}
        />
      ))}
    </>
  );
}
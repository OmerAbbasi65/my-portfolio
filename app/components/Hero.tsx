"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import FloatingShapes from "./FloatingShapes";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600 flex items-center justify-center">

      <FloatingShapes />

      <div className="relative z-10 text-center px-6">

        <motion.div
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/my-portfolio/images/dp.jpg"
            alt="Muhammad Omer Abbasi"
            width={220}
            height={220}
            className="rounded-full border-4 border-white shadow-2xl mx-auto hover:scale-105 transition duration-500"
          />
        </motion.div>

        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: .3,
          }}
          className="text-5xl md:text-7xl font-extrabold mt-10"
        >
          Muhammad Omer Abbasi
        </motion.h1>

        <div className="text-xl md:text-3xl mt-8 font-semibold text-blue-100">

          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              1500,
              "Next.js Developer",
              1500,
              "React Developer",
              1500,
              "PHP Developer",
              1500,
              "AI Prompt Engineer",
              1500,
            ]}
            speed={40}
            repeat={Infinity}
          />

        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
            duration: 1,
          }}
          className="max-w-3xl mx-auto mt-8 text-lg text-gray-200"
        >
          I build elegant, responsive and SEO-friendly web applications using
          modern technologies like Next.js, React, PHP and ASP.NET.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.3,
          }}
          className="mt-10 flex justify-center gap-6 flex-wrap"
        >
          <a
            href="#projects"
            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:scale-110 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-900 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

    

    </section>
  );
}
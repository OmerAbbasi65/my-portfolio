"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  FaExternalLinkAlt,
  FaPlayCircle,
  FaCode,
} from "react-icons/fa";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  videoUrl?: string;
  preview?: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Quick Resume",
    description:
      "A modern resume builder that helps users create professional resumes within minutes.",
    image: "/images/quick-resume.png",
    liveUrl: "https://nextjs-quick-resume.vercel.app/",
    preview: true,
  },

  {
    id: 2,
    title: "Lab Automation",
    description:
      "A complete laboratory management system with an admin dashboard, patient reports and testing workflow.",
    image: "/images/admin-dashboard-ss.jpg",
    videoUrl:
      "https://drive.google.com/file/d/1nQqZ7u3x2LruEL0mnnnws7KAZicFuIqM/preview",
  },

  {
    id: 3,
    title: "BMI Calculator",
    description:
      "A simple and responsive Body Mass Index calculator built using Streamlit.",
    image: "/images/bmi.png",
    liveUrl:
      "https://bmi-calculater-by-omer-abbasi-git.streamlit.app/",
    preview: false,
  },

  {
    id: 4,
    title: "Weather Checking App",
    description:
      "Find live weather updates of cities around the world using a clean and responsive interface.",
    image: "/images/weather.png",
    liveUrl:
      "https://weather-app-by-omer.streamlit.app/",
    preview: false,
  },

  {
    id: 5,
    title: "Unit Converter",
    description:
      "Convert different units including length, weight, area, speed, temperature and many more.",
    image: "/images/unit-converter.png",
    liveUrl:
      "https://unit-converter-appgit-by-omer-abbasi.streamlit.app/",
    preview: false,
  },
];

export default function Projects() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="relative py-24 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
    >
      
<div className="max-w-7xl mx-auto">
  <motion.h2
    initial={{ opacity: 0, y: -40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-5xl font-bold text-center text-white"
  >
    My Projects
  </motion.h2>

  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
    viewport={{ once: true }}
    className="text-center text-gray-300 mt-5 max-w-3xl mx-auto"
  >
    Here are some of my favorite projects that demonstrate my
    experience in Full Stack Development, React, Next.js,
    PHP, ASP.NET and AI-assisted solutions.
  </motion.p>

  <div className="grid lg:grid-cols-2 gap-10 mt-16">
    {projects.map((project, index) => (
      <motion.div
        key={project.id}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: index * 0.15,
        }}
        viewport={{ once: true }}
        whileHover={{
          y: -12,
          scale: 1.02,
        }}
        className="rounded-3xl overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl"
      >
        {/* Card Header */}
        <div className="h-56 bg-gradient-to-br from-blue-600 via-indigo-700 to-slate-900 flex flex-col items-center justify-center">
          <motion.div
            whileHover={{
              rotate: 8,
              scale: 1.15,
            }}
            transition={{ duration: 0.3 }}
          >
            <FaCode className="text-white text-7xl drop-shadow-lg" />
          </motion.div>

          <p className="mt-5 text-white text-lg font-semibold tracking-wide">
            {project.title}
          </p>
        </div>

        {/* Card Content */}
        <div className="p-8">
          <p className="text-gray-300 leading-7">
            {project.description}
          </p>

          <div className="flex gap-4 mt-8 flex-wrap">
            {project.liveUrl && (
              <motion.a
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-full font-semibold flex items-center gap-3 text-white"
              >
                <FaExternalLinkAlt />
                Visit Project
              </motion.a>
            )}

            {project.videoUrl && (
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedVideo(project.videoUrl!)}
                className="bg-red-500 hover:bg-red-600 transition px-6 py-3 rounded-full font-semibold flex items-center gap-3 text-white"
              >
                <FaPlayCircle />
                Watch Demo
              </motion.button>
            )}
          </div>
        </div>
      </motion.div>
    ))}
  </div>

  <AnimatePresence>
    {selectedVideo && (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSelectedVideo(null)}
      >
        <motion.div
          className="relative w-full max-w-5xl rounded-2xl bg-white p-3 shadow-2xl"
          initial={{ scale: 0.8, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 40 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute right-4 top-4 z-10 rounded-full bg-red-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
          >
            ✕ Close
          </button>

          <div className="overflow-hidden rounded-xl">
            <iframe
              src={selectedVideo}
              width="100%"
              height="600"
              allow="autoplay"
              className="rounded-xl"
              title="Project Demo"
            />
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
</div>

    </section>
  );
}
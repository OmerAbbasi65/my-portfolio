"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaSearch,
  FaRobot,
} from "react-icons/fa";

import {
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiDotnet,
  SiMysql,
  SiTypescript,
} from "react-icons/si";

const skills = [
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400 text-5xl" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500 text-5xl" />,
  },
  {
    name: "React",
    icon: <FaReact className="text-cyan-400 text-5xl" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-white text-5xl" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-400 text-5xl" />,
  },
  {
    name: "PHP",
    icon: <FaPhp className="text-indigo-400 text-5xl" />,
  },
  {
    name: "ASP.NET",
    icon: <SiDotnet className="text-violet-400 text-5xl" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500 text-5xl" />,
  },
  {
    name: "MySQL",
    icon: <SiMysql className="text-blue-400 text-5xl" />,
  },
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-orange-500 text-5xl" />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-blue-400 text-5xl" />,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-orange-500 text-5xl" />,
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-white text-5xl" />,
  },
  {
    name: "SEO",
    icon: <FaSearch className="text-green-400 text-5xl" />,
  },
  {
    name: "AI Prompt Engineering",
    icon: <FaRobot className="text-pink-400 text-5xl" />,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 bg-gradient-to-br from-blue-950 via-slate-900 to-black"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center text-white"
        >
          Skills & Technologies
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .2 }}
          viewport={{ once: true }}
          className="text-center text-gray-300 mt-5 max-w-3xl mx-auto"
        >
          I enjoy building modern, scalable and responsive web applications
          using today's leading technologies.
        </motion.p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-16">

          {skills.map((skill, index) => (

            <motion.div
              key={skill.name}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * .07,
                duration: .5,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.08,
                rotate: 1,
                y: -10,
              }}
              className="
              bg-white/10
              border
              border-white/20
              backdrop-blur-lg
              rounded-3xl
              p-8
              text-center
              shadow-xl
              transition-all"
            >
              <motion.div
                whileHover={{
                  rotate: 360,
                }}
                transition={{
                  duration: .8,
                }}
                className="flex justify-center"
              >
                {skill.icon}
              </motion.div>

              <h3 className="text-white font-semibold mt-6 text-lg">
                {skill.name}
              </h3>
            </motion.div>

          ))}

        </div>
      </div>
    </section>
  );
}
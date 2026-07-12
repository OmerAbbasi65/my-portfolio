"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-blue-950 py-20 px-6"
    >
      {/* Background Glow */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-5xl font-bold text-white"
        >
          Let's Work Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-3xl text-center text-lg text-gray-300"
        >
          I'm always interested in new opportunities, freelance projects,
          collaborations, and exciting ideas. Feel free to reach out!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid gap-8 md:grid-cols-2"
        >
          {/* Contact Card */}
          <div className="rounded-3xl border border-white/20 bg-white/10 p-10 backdrop-blur-lg shadow-2xl">
            <h3 className="mb-8 text-3xl font-bold text-white">
              Contact Information
            </h3>

            <div className="space-y-6">

              <a
                href="mailto:abbasiomer65@gmail.com"
                className="flex items-center gap-4 rounded-xl bg-white/10 p-5 transition hover:bg-blue-500"
              >
                <FaEnvelope className="text-3xl text-white" />

                <div>
                  <p className="text-sm text-gray-300">Email</p>

                  <p className="font-semibold text-white">
                    abbasiomer65@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/OmerAbbasi65"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl bg-white/10 p-5 transition hover:bg-slate-700"
              >
                <FaGithub className="text-3xl text-white" />

                <div>
                  <p className="text-sm text-gray-300">GitHub</p>

                  <p className="font-semibold text-white">
                    github.com/OmerAbbasi65
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/muhammad-omer-frontend-web-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl bg-white/10 p-5 transition hover:bg-blue-700"
              >
                <FaLinkedin className="text-3xl text-white" />

                <div>
                  <p className="text-sm text-gray-300">LinkedIn</p>

                  <p className="font-semibold text-white">
                    Connect with me
                  </p>
                </div>
              </a>

            </div>
          </div>

          {/* CTA Card */}
          <div className="flex flex-col justify-center rounded-3xl border border-white/20 bg-white/10 p-10 backdrop-blur-lg shadow-2xl">

            <h3 className="text-3xl font-bold text-white">
              Ready to Build Something Amazing?
            </h3>

            <p className="mt-6 leading-8 text-gray-300">
              Whether you're looking for a Full Stack Developer,
              Next.js Developer, React Developer, or someone to
              improve your website's SEO and performance,
              I'd love to hear about your project.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <motion.a
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: .95 }}
                href="mailto:abbasiomer65@gmail.com"
                className="rounded-full bg-blue-500 px-8 py-4 font-semibold text-white transition hover:bg-blue-600"
              >
                Hire Me
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: .95 }}
                href="/Updated-CV.pdf"
                download
                className="flex items-center gap-3 rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black"
              >
                <FaDownload />

                Download CV
              </motion.a>

            </div>
          </div>
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .5 }}
          viewport={{ once: true }}
          className="mt-20 border-t border-white/10 pt-8 text-center text-gray-400"
        >
          © {new Date().getFullYear()} Muhammad Omer Abbasi

          <br />

          Built with ❤️ using Next.js, React, Tailwind CSS and Framer Motion.
        </motion.footer>
      </div>
    </section>
  );
}
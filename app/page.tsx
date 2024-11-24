"use client";

import { useState } from "react";
import Image from "next/image";
import profilePic from "../public/images/profile.png"; // Add your image in the 'public' folder with this name



export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600 text-white pb-0">
      <div
        style={{
          backgroundImage: "url('images/bg11.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          width: "100%",
        }}
        className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600 text-white p-10"
      >
        {/* Profile Image */}
        <div className="flex justify-center mt-10">
          <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image src={profilePic} alt="Profile Picture" layout="fill" objectFit="cover" />
          </div>
        </div>

        {/* Introduction Section */}
        <header className="text-center py-10">
          <h1
            className="text-3xl md:text-5xl font-bold mt-5 py-6 px-2 md:py-10 md:px-0 rounded-md"
            style={{ backgroundColor: "rgb(0, 0, 0)" }}
          >
            Hi, I’m Muhammad Omer Abbasi
          </h1>
          <p
            className="text-sm md:text-lg mt-4 max-w-full md:max-w-xl mx-auto p-3 md:p-5 rounded-md"
            style={{ backgroundColor: "rgb(0, 0, 0)" }}
          >
            A passionate full stack web developer crafting elegant and efficient web experiences
            with a strong focus on SEO.
          </p>
        </header>

      </div>

      {/* Skills Section */}
      <section className="my-10 p-10">
        <h2 className="text-3xl font-semibold mb-6 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white text-black p-5 rounded shadow-md">JavaScript</div>
          <div className="bg-white text-black p-5 rounded shadow-md">React</div>
          <div className="bg-white text-black p-5 rounded shadow-md">Next.js</div>
          <div className="bg-white text-black p-5 rounded shadow-md">Tailwind CSS</div>
          <div className="bg-white text-black p-5 rounded shadow-md">PHP</div>
          <div className="bg-white text-black p-5 rounded shadow-md">ASP.NET</div>
          <div className="bg-white text-black p-5 rounded shadow-md">AI Prompt Engineering</div>
          <div className="bg-white text-black p-5 rounded shadow-md">SEO</div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="my-10 p-10">
        <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Quick Resume Project */}
          <div className="bg-white text-black p-5 rounded shadow-md">
            <h3 className="text-xl font-bold text-center">Quick Resume</h3>
            <p className="mt-2 text-center">
              A platform where everyone can create a simple and good-looking resume.
            </p>
            <center>
              <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300">
                <a
                  className="font-semibold"
                  href="https://nextjs-quick-resume.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit
                </a>
              </button>
            </center>
            <iframe
              src="https://nextjs-quick-resume.vercel.app/"
              width="100%"
              height="180px"
              className="rounded mt-2"
              title="Quick Resume Preview"
            ></iframe>
          </div>

          {/* Lab Automation Project */}
          <div className="bg-white text-black p-5 rounded shadow-md relative">
            <h3 className="text-xl font-bold text-center">Lab Automation</h3>
            <p className="mt-2 text-center">Lab testing web app.</p>
            <center>
              <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300">
                <a
                  className="font-semibold"
                  href="http://lab-automation.byethost5.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit
                </a>
              </button>
            </center>
            <div
              className="cursor-pointer mt-2"
              onClick={() => setIsModalOpen(true)}
            >
              {/* Thumbnail */}
              <div
                className="bg-gray-300 rounded w-full h-[180px] flex items-center justify-center"
                style={{ backgroundImage: "url('images/admin-dashboard-ss.jpg')", backgroundSize: 'cover' }}
              >
                <p className="text-black text-lg font-bold">
                  <i className="fa fa-play"></i>
                </p>

              </div>
            </div>


            {/* Modal for Video */}
            {isModalOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                onClick={() => setIsModalOpen(false)}
              >
                <div
                  className="bg-white p-5 rounded-md shadow-lg max-w-3xl w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <video controls className="w-full rounded">
                    <source src="/videos/lab-automation-demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <button
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        style={{
          backgroundImage: "url('images/bg4.png')",
          backgroundSize: "1400px 350px",
          backgroundPosition: "center",
          height: "100%",
          width: "100%",
        }}
        className="mt-10 p-10 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-black"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">Contact Me</h2>
        <p className="text-center">
          Feel free to reach out via email at{" "}
          <a href="mailto:abbasiomer65@gmail.com" className="underline">
            abbasiomer65@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
}

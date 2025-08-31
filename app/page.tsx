"use client";

import { useState } from "react";
import Image from "next/image";
import profilePic from "../public/images/dp.jpg"; // Put this image in /public/images/

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600 text-white pb-0">
      {/* Hero Section */}
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
            <Image src={profilePic} alt="Profile Picture" fill style={{ objectFit: "cover" }} />
          </div>
        </div>

        {/* Introduction */}
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
          {[
            "JavaScript",
            "React",
            "Next.js",
            "Tailwind CSS",
            "PHP",
            "ASP.NET",
            "AI Prompt Engineering",
            "SEO",
          ].map((skill) => (
            <div key={skill} className="bg-white text-black p-5 rounded shadow-md">
              {skill}
            </div>
          ))}
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
              <a
                href="https://nextjs-quick-resume.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white text-sm px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300 font-semibold mt-3"
              >
                Visit
              </a>
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
            <div
              className="cursor-pointer mt-2"
              onClick={() => setIsModalOpen(true)}
            >
              {/* Thumbnail */}
              <div
                className="bg-gray-300 rounded w-full h-[180px] flex items-center justify-center"
                style={{
                  backgroundImage: "url('images/admin-dashboard-ss.jpg')",
                  backgroundSize: "cover",
                }}
              >
                <p className="text-black text-lg font-bold">
                  <i className="fa fa-play"></i>
                </p>
              </div>
            </div>

            {/* Modal with Google Drive Video */}
            {isModalOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                onClick={() => setIsModalOpen(false)}
              >
                <div
                  className="bg-white p-5 rounded-md shadow-lg max-w-3xl w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <iframe
                    src="https://drive.google.com/file/d/1nQqZ7u3x2LruEL0mnnnws7KAZicFuIqM/preview"
                    width="100%"
                    height="480"
                    allow="autoplay"
                    className="rounded"
                  ></iframe>
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

         {/* Find Yo Meal */}
          <div className="bg-white text-black p-5 rounded shadow-md">
            <h3 className="text-xl font-bold text-center">Find Yo Meal</h3>
            <p className="mt-2 text-center">
              By using this app you can find and order food from your nearest and favourite restaurants.
            </p>
            <center>
              <a
                href="https://find-yo-meal.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white text-sm px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300 font-semibold mt-3"
              >
                Visit
              </a>
            </center>
            
          </div>

          {/* BMI Calculator */}
          <div className="bg-white text-black p-5 rounded shadow-md">
            <h3 className="text-xl font-bold text-center">BMI Calculator</h3>
            <p className="mt-2 text-center">
              By using this app you can calculate your body mass index.
            </p>
            <center>
              <a
                href="https://bmi-calculater-by-omer-abbasi-git.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white text-sm px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300 font-semibold mt-3"
              >
                Visit
              </a>
            </center>
            
          </div>

          {/* Weather Checking App */}
          <div className="bg-white text-black p-5 rounded shadow-md">
            <h3 className="text-xl font-bold text-center">Weather Checking App</h3>
            <p className="mt-2 text-center">
              By using this app you can find the weather update of any city.
            </p>
            <center>
              <a
                href="https://weather-app-by-omer.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white text-sm px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300 font-semibold mt-3"
              >
                Visit
              </a>
            </center>
            
          </div>

           {/* Unit Converter App */}
          <div className="bg-white text-black p-5 rounded shadow-md">
            <h3 className="text-xl font-bold text-center">Unit Converter App</h3>
            <p className="mt-2 text-center">
              By using this app you can make conversions of all kind of units.
            </p>
            <center>
              <a
                href="https://unit-converter-appgit-by-omer-abbasi.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white text-sm px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300 font-semibold mt-3"
              >
                Visit
              </a>
            </center>
            
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

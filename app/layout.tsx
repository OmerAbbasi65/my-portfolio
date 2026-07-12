import type { Metadata } from "next";
import localFont from "next/font/local";
import "../app/globals.css";
import { Analytics } from "@vercel/analytics/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://omerabbasi65.github.io/my-portfolio"),

  title: {
    default: "Muhammad Omer Abbasi | Full Stack Developer",
    template: "%s | Muhammad Omer Abbasi",
  },

  description:
    "Portfolio of Omer Abbasi showcasing Full Stack Development, Next.js, React, PHP, Laravel, CodeIgniter, and modern web applications.",

  keywords: [
    "Omer Abbasi",
    "Portfolio",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "PHP",
    "Laravel",
    "CodeIgniter",
    "Frontend Developer",
    "Backend Developer",
  ],

  authors: [
    {
      name: "Muhammad Omer Abbasi",
    },
  ],

  creator: "Muhammad Omer Abbasi",

  publisher: "Muhammad Omer Abbasi",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Muhammad Omer Abbasi | Full Stack Developer",

    description:
      "Explore the portfolio of Omer Abbasi featuring modern web applications, Next.js projects, React development, PHP, Laravel, and more.",

    url: "https://omerabbasi65.github.io/my-portfolio",

    siteName: "Muhammad Omer Abbasi Portfolio",

    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Omer Abbasi Portfolio",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Muhammad Omer Abbasi | Full Stack Developer",

    description:
      "Explore my portfolio showcasing Full Stack Development projects built using Next.js, React, PHP, Laravel and modern technologies.",

    images: ["/preview.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="QcruunOVPCjpQ8_wTK80xtjwg3knkgapFYn0fUA2N3A"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
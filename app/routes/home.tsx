import React from "react";

export function meta() {
  return [
    { title: "Home | My Personal Website" },
    { name: "description", content: "Welcome to my personal website!" },
  ];
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] py-12 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-blue-700 dark:text-blue-400">Hi, I'm [Your Name]</h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 mb-8">
          I'm a passionate developer and designer, building modern, responsive web experiences. Explore my services, learn more about me, or get in touch!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/services" className="px-8 py-3 bg-blue-700 text-white rounded-lg font-semibold shadow hover:bg-blue-800 transition-colors">My Services</a>
          <a href="/contact-us" className="px-8 py-3 bg-white border border-blue-700 text-blue-700 rounded-lg font-semibold shadow hover:bg-blue-50 dark:bg-gray-900 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-gray-800 transition-colors">Contact Me</a>
        </div>
      </div>
    </main>
  );
}

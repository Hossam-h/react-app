import React from "react";

export default function About() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-blue-700 dark:text-blue-400">About Me</h1>
      <div className="max-w-2xl bg-white dark:bg-gray-800 rounded-xl shadow p-8">
        <p className="text-lg text-gray-700 dark:text-gray-200 text-center">
          Hi! I'm [Your Name], a passionate developer and designer. I love building modern, responsive web applications and helping businesses grow with technology. Let's create something amazing together!
        </p>
      </div>
    </main>
  );
} 
import React from "react";

export default function Services() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-blue-700 dark:text-blue-400">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center">
          <span className="text-3xl mb-4">💡</span>
          <h2 className="text-xl font-semibold mb-2">Consulting</h2>
          <p className="text-gray-600 dark:text-gray-300 text-center">Expert advice to help you grow your business and solve problems efficiently.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center">
          <span className="text-3xl mb-4">🛠️</span>
          <h2 className="text-xl font-semibold mb-2">Development</h2>
          <p className="text-gray-600 dark:text-gray-300 text-center">Custom software and web development tailored to your needs.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center">
          <span className="text-3xl mb-4">🎨</span>
          <h2 className="text-xl font-semibold mb-2">Design</h2>
          <p className="text-gray-600 dark:text-gray-300 text-center">Modern, user-friendly designs to make your brand stand out.</p>
        </div>
      </div>
    </main>
  );
} 
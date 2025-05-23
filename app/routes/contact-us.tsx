import React, { useState } from "react";

function validate(form: { name: string; email: string; message: string }) {
  const errors: { name?: string; email?: string; message?: string } = {};
  if (!form.name.trim()) {
    errors.name = "Name is required.";
  } else if (!/^[a-zA-Z\s]{2,}$/.test(form.name.trim())) {
    errors.name = "Name must be at least 2 letters and contain only letters and spaces.";
  }
  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!form.message.trim()) {
    errors.message = "Message is required.";
  } else if (form.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters long.";
  }
  return errors;
}

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-blue-700 dark:text-blue-400">Contact Us</h1>
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-xl shadow p-8">
        {submitted ? (
          <div className="text-center text-green-600 dark:text-green-400 text-lg font-semibold">Thank you for reaching out!</div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            <div>
              <label className="block mb-2 text-gray-700 dark:text-gray-200" htmlFor="name">Name</label>
              <input
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-900 dark:text-white ${errors.name ? 'border-red-500' : ''}`}
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div>
              <label className="block mb-2 text-gray-700 dark:text-gray-200" htmlFor="email">Email</label>
              <input
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-900 dark:text-white ${errors.email ? 'border-red-500' : ''}`}
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div>
              <label className="block mb-2 text-gray-700 dark:text-gray-200" htmlFor="message">Message</label>
              <textarea
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-900 dark:text-white ${errors.message ? 'border-red-500' : ''}`}
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
              />
              {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </main>
  );
} 
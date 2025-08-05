import React from "react";

function ContactHero() {
  return (
    <section className="w-full pt-40 pb-24 bg-gradient-to-b from-slate-100 via-white to-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
          Get in Touch
        </h1>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          We’re here to answer your questions, explore new opportunities, and grow together. Reach out — we’d love to connect!
        </p>
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=700&q=80"
            alt="Contact illustration"
            className="rounded-2xl shadow-xl"
          />
        </div>
        <div className="bg-slate-50 p-8 rounded-2xl shadow-lg">
          <form className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-slate-700 font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-400"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-slate-700 font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-400"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-slate-700 font-medium mb-1">Message</label>
              <textarea
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-400"
                rows={5}
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-slate-900 text-white py-3 rounded-xl font-semibold hover:bg-slate-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="w-full py-20 bg-slate-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">
          Prefer Email?
        </h2>
        <p className="text-slate-600 text-lg">
          Drop us a message at{" "}
          <a href="mailto:contact@yourdomain.com" className="text-blue-600 underline font-medium">
            contact@yourdomain.com
          </a>{" "}
          — we usually respond within 1–2 business days.
        </p>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      <ContactHero />
      <ContactForm />
      <ContactCTA />
    </div>
  );
}
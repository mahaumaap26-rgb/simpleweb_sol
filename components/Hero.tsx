"use client";

export default function Hero() {
  return (
    <section className="text-center py-32 px-6 bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <h1 className="text-5xl md:text-6xl font-bold leading-tight">
        Professional Websites That Grow Your Business
      </h1>

      <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
        We build fast, modern, SEO-friendly websites that convert visitors into customers.
      </p>

      <div className="mt-10 flex justify-center gap-4 flex-wrap">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-xl shadow hover:scale-105 transition">
          View Portfolio
        </button>

        <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-xl hover:bg-blue-50 transition">
          Get Free Quote
        </button>
      </div>
    </section>
  );
}

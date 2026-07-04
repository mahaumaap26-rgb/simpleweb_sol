"use client";

export default function Hero() {
  return (
    <section className="text-center py-28 px-6 bg-gradient-to-b from-blue-50 to-white">
      <h1 className="text-4xl md:text-6xl font-bold">
        Professional Websites That Help Businesses Grow
      </h1>

      <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
        We design fast, modern, SEO-friendly websites that convert visitors
        into customers.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          View Portfolio
        </button>

        <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
          Get Free Quote
        </button>
      </div>
    </section>
  );
}

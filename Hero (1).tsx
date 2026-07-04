"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="text-center py-28 px-6 bg-gradient-to-b from-blue-50 to-white">
      
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold"
      >
        Professional Websites That Help Businesses Grow
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 text-gray-600 max-w-2xl mx-auto"
      >
        We design fast, modern, SEO-friendly websites that convert visitors into customers.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-8 flex justify-center gap-4"
      >
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:scale-105 transition">
          View Portfolio
        </button>

        <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
          Get Free Quote
        </button>
      </motion.div>

    </section>
  );
}

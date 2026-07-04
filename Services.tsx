export default function Services() {
  return (
    <section className="py-20 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          "Business Websites",
          "E-commerce Stores",
          "Marketplace Websites",
          "Healthcare Websites",
          "Website Redesign",
          "Website Maintenance",
        ].map((item) => (
          <div
            key={item}
            className="p-6 border rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg text-blue-600">
              {item}
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Modern, fast and mobile-friendly design built to convert visitors into customers.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

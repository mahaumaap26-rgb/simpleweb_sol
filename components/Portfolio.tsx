export default function Portfolio() {
  return (
    <section className="py-20 px-6 bg-blue-50">
      <h2 className="text-3xl font-bold text-center mb-12">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {[
          {
            title: "Car Marketplace",
            desc: "Buy & sell vehicles with advanced filters",
          },
          {
            title: "Hospital Website",
            desc: "Appointment booking & doctor listings",
          },
          {
            title: "Real Estate Platform",
            desc: "Property listings with search filters",
          },
          {
            title: "E-commerce Store",
            desc: "Online shopping with payment integration",
          },
        ].map((p) => (
          <div
            key={p.title}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-blue-600 text-lg">
              {p.title}
            </h3>
            <p className="text-gray-500 mt-2">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

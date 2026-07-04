export default function Pricing() {
  return (
    <section className="py-20 px-6 bg-blue-50">
      <h2 className="text-3xl font-bold text-center mb-12">
        Pricing Plans
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          {
            name: "Starter",
            price: "$299",
            features: ["1-3 Pages", "Responsive Design", "Basic SEO"],
          },
          {
            name: "Professional",
            price: "$699",
            features: ["5-7 Pages", "SEO Optimization", "Contact Form", "Speed Optimization"],
          },
          {
            name: "Premium",
            price: "$1499",
            features: ["Custom Website", "Advanced Features", "Full SEO", "Admin Panel"],
          },
        ].map((plan) => (
          <div
            key={plan.name}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold text-blue-600">
              {plan.name}
            </h3>
            <p className="text-2xl font-bold mt-2">{plan.price}</p>

            <ul className="mt-4 text-gray-600 space-y-2">
              {plan.features.map((f) => (
                <li key={f}>✔ {f}</li>
              ))}
            </ul>

            <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

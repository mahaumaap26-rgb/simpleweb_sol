export default function FAQ() {
  return (
    <section className="py-20 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {[
          {
            q: "How long does it take to build a website?",
            a: "Usually 5–14 days depending on project size.",
          },
          {
            q: "Will my website be mobile friendly?",
            a: "Yes, all websites are fully responsive.",
          },
          {
            q: "Do you provide SEO?",
            a: "Yes, basic SEO is included in all packages.",
          },
          {
            q: "Can I request changes?",
            a: "Yes, revisions are included in every project.",
          },
        ].map((item) => (
          <div
            key={item.q}
            className="border rounded-lg p-4 hover:shadow transition"
          >
            <h3 className="font-semibold">{item.q}</h3>
            <p className="text-gray-600 mt-2">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

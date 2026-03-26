const props = [
  {
    label: "COMFORT",
    title: "Wear-All-Day Comfort",
    description:
      "Designed with soft, natural materials and cushioned soles so you can wear them from morning to night without a second thought.",
  },
  {
    label: "SUSTAINABILITY",
    title: "Sustainability In Every Step",
    description:
      "From renewable materials to carbon-neutral practices, we build shoes that tread lightly on the planet.",
  },
  {
    label: "MATERIALS",
    title: "Materials From The Earth",
    description:
      "Merino wool, eucalyptus tree fiber, sugarcane-based foam. Nature provides the best ingredients for your feet.",
  },
];

export function ValueProps() {
  return (
    <section className="px-4 md:px-8 lg:px-12 py-16 bg-cream-light">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto text-center">
        {props.map((prop) => (
          <div key={prop.label}>
            <p className="text-[11px] font-medium uppercase tracking-[0.8px] text-warm-gray mb-2">
              {prop.label}
            </p>
            <h3 className="text-lg font-normal text-charcoal mb-3">{prop.title}</h3>
            <p className="text-sm text-warm-gray leading-relaxed">{prop.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

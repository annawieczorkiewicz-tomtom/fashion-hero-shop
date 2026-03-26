const props = [
  {
    title: "WEAR ALL DAY COMFORT",
    description:
      "Designed with soft, natural materials and cushioned soles so you can wear them from morning to night without a second thought.",
  },
  {
    title: "SUSTAINABILITY IN EVERY STEP",
    description:
      "From renewable materials to carbon-neutral practices, we build shoes that tread lightly on the planet.",
  },
  {
    title: "MATERIALS FROM THE EARTH",
    description:
      "Merino wool, eucalyptus tree fiber, sugarcane-based foam. Nature provides the best ingredients for your feet.",
  },
];

export function ValueProps() {
  return (
    <section className="px-4 md:px-8 lg:px-12 py-14 bg-cream-light">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
        {props.map((prop) => (
          <div key={prop.title}>
            <h3 className="text-nav text-charcoal mb-3">{prop.title}</h3>
            <p className="text-sm text-warm-gray leading-relaxed">{prop.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

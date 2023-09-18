function Services() {
  const services = [
    {
      title: "Web Design",
      description:
        "Developing stable, fast and efficient user interface maintaining it's interactiveness and ensuring the technical feasibility of UI/UX.",
      icon: "ri-layout-4-line",
    },
    {
      title: "Development",
      description:
        "Building reusable code and libraries, following SEO best practices and optimizing application for maximum speed and scalability.",
      icon: "ri-code-box-line",
    },
    {
      title: "Mobile App",
      description:
        "Implementing mobile-based desgin features providing a seamless user experience.",
      icon: "ri-smartphone-line",
    },
  ];

  const serviceElems = services.map((service) => (
    <article key={service.title} className="services__card">
      <div className="services__border"></div>
      <div className="services__content">
        <div className="services__icon">
          <div className="services__box"></div>
          <i className={service.icon}></i>
        </div>
        <h2 className="services__title">{service.title}</h2>
        <p className="services__description">{service.description}</p>
      </div>
    </article>
  ));

  return (
    <section className="services section">
      <h2 className="section__title-2">
        <span>Services.</span>
      </h2>
      <div className="services__container container grid">{serviceElems}</div>
    </section>
  );
}
export default Services;

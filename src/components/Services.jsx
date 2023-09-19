function Services() {
  const services = [
    {
      title: "Responsive Web Design",
      description:
        "I create websites that adapt and work seamlessly across various devices and screen sizes, ensuring an optimal user experience.",
      icon: "ri-layout-4-line",
    },
    {
      title: "User Interface (UI) Implementation",
      description:
        "I collaborate with UX designers to translate wireframes and design mockups into interactive and visually appealing user interfaces.",
      icon: "ri-code-box-line",
    },
    {
      title: "Performance Optimization",
      description:
        "I focus on optimizing website speed and performance to provide users with a fast and efficient browsing experience.",
      icon: "ri-speed-up-line",
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

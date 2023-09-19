import projects1 from "/src/assets/img/project-1.jpg";
import projects2 from "/src/assets/img/project-2.jpg";
import projects3 from "/src/assets/img/project-3.jpg";

function Projects() {
  const projects = [
    {
      subtitle: "Website",
      title: "Dummy Project!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ab non tempora illo quod, ea officia sequi totam dolores rem a, corrupti blanditiis sint saepe repudiandae quis beatae magni? Ducimus.",
      demo: "",
      sourceCode: "https://github.com/",
      design: "https://www.behance.net",
      projectImg: projects1,
    },
    {
      subtitle: "Web app",
      title: "Dummy Project!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ab non tempora illo quod, ea officia sequi totam dolores rem a, corrupti blanditiis sint saepe repudiandae quis beatae magni? Ducimus.",
      demo: "",
      sourceCode: "https://github.com/",
      design: "https://www.behance.net",
      projectImg: projects2,
    },
    {
      subtitle: "Game",
      title: "Dummy Project!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ab non tempora illo quod, ea officia sequi totam dolores rem a, corrupti blanditiis sint saepe repudiandae quis beatae magni? Ducimus.",
      demo: "",
      sourceCode: "https://github.com/",
      design: "https://www.behance.net",
      projectImg: projects3,
    },
    {
      subtitle: "Website",
      title: "Dummy Project!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ab non tempora illo quod, ea officia sequi totam dolores rem a, corrupti blanditiis sint saepe repudiandae quis beatae magni? Ducimus.",
      demo: "",
      sourceCode: "https://github.com/",
      design: "https://www.behance.net",
      projectImg: projects1,
    },
  ];

  const projectElems = projects.map((project) => (
    <article className="projects__card" key={project.demo}>
      <div className="projects__image">
        <img src={project.projectImg} alt="image" className="projects__img" />
        <a
          // href={project.demo}
          // target="_blank"
          className="projects__button button"
        >
          <i className="ri-arrow-right-up-line"></i>
        </a>
      </div>

      <div className="projects__content">
        <h3 className="projects__subtitle">{project.subtitle}</h3>
        <h2 className="projects__title">{project.title}</h2>
        <p className="projects__description">{project.description}</p>
      </div>

      <div className="projects__buttons">
        <a href={project.sourceCode} target="_blank" className="projects__link">
          <i className="ri-github-line"></i> View
        </a>
        <a href={project.design} target="_blank" className="projects__link">
          <i class="ri-behance-line"></i> View
        </a>
      </div>
    </article>
  ));

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title-1">
        <span>Projects.</span>
      </h2>
      <div className="projects__container container grid">{projectElems}</div>
    </section>
  );
}

export default Projects;

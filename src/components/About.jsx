import aboutProfile from "/src/assets/img/about.jpg";
import randomLines from "/src/assets/img/random-lines.svg";

function About() {
  return (
    <section className="about section" id="about">
      <div className="about__container container grid">
        <h2 className="section__title-1">
          <span>About Me</span>
        </h2>

        <div className="about__profile">
          <div className="about__image">
            <img src={aboutProfile} alt="image" className="about__img" />
            <div className="about__shadow"></div>
            <div className="geometric-box"></div>
            <img src={randomLines} alt="" className="about__line" />
            <div className="about__box"></div>
          </div>
        </div>

        <div className="about__info">
          <p className="about__description">
            Hello there! I'm <b>Yousuf</b>, a passionate{" "}
            <b>frontend developer</b> with a keen eye for design and a love for
            crafting exceptional user experiences. With a strong foundation in{" "}
            <b>web development</b> and a background in{" "}
            <b>software engineering</b>, I thrive on the intersection of
            creativity and technical expertise.
          </p>
          <ul className="about__list">
            <li className="about__item">
              <b>My Skills Are:</b> HTML, CSS, JavaScript, React, Git & GitHub,
              Bootstrap, Taiwlwind & Figma.
            </li>
          </ul>

          <div className="about__buttons">
            <a href="#contact" className="button">
              <i className="ri-send-plane-line"></i>
              Contact Me
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/yousufrashwan"
              className="button__ghost"
            >
              <i className="ri-linkedin-box-line"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

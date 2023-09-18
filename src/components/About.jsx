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
            I create <b>Web Apps</b> with
            <b> Responsive & Interactive User Interface</b> building new
            user-facing features,
            <b> optimize application for maximum speed and scalability</b>, I
            have rich experience in building different types of web app/website
            projects with different tools.
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

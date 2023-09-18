import homeProfile from "/src/assets/img/profile-pic.jpg";
import curvedArrow from "/src/assets/img/curved-arrow.svg";
import randomLines from "/src/assets/img/random-lines.svg";

function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <h1 className="home__name">Yousuf Rashwan</h1>

        <div className="home__profile">
          <div className="home__image">
            <img src={homeProfile} alt="image" className="home__img" />
            <div className="home__shadow"></div>
            <img src={curvedArrow} alt="" className="home__arrow" />
            <img src={randomLines} alt="" className="home__line" />
            <div className="geometric-box"></div>
          </div>

          <div className="home__social">
            <a
              href="https://www.linkedin.com/in/yousufrashwan"
              target="_blank"
              className="home__social-link"
            >
              <i className="ri-linkedin-box-line"></i>
            </a>
            <a
              href="https://github.com/YousufRashwan"
              target="_blank"
              className="home__social-link"
            >
              <i className="ri-github-line"></i>
            </a>
            <a
              href="https://twitter.com/YousufRashwan"
              target="_blank"
              className="home__social-link"
            >
              <i className="ri-twitter-line"></i>
            </a>
            <a
              href="https://www.instagram.com/yousufrashwan"
              target="_blank"
              className="home__social-link"
            >
              <i className="ri-instagram-line"></i>
            </a>
          </div>
        </div>

        <div className="home__info">
          <p className="home__description">
            <b>Frontend Developer</b>, with knowledge in web development and
            software engineering, I develop user-interfaces combining the art of
            design with the art of programming.
          </p>
          <a href="#about" className="home__scroll">
            <div className="home__scroll-box">
              <i className="ri-arrow-down-s-line"></i>
            </div>
            <span className="home__scroll-text">Scroll Down</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;

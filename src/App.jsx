import { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [showScrollUp, setShowScrollUp] = useState(false);
  const sections = document.querySelectorAll("section[id]");

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay: 400,
      // reset: true, // Anumations reapeat
    });

    sr.reveal(`.home__profile, .about__image, .contact__mail`, {
      origin: "right",
    });
    sr.reveal(
      `.home__name, .home__info, .about__conatiner, .section__title-1, .about__info,
      .contact__social, .contact__data`,
      { origin: "left" }
    );
    sr.reveal(`.services__card, .projects__card`, { interval: 100 });
  }, []);

  useEffect(() => {
    function handleScrollUp() {
      const { scrollY } = this;
      setShowScrollUp(scrollY > 350);

      /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute("id"),
          sectionClass = document.querySelector(
            `.nav__menu a[href*=${sectionId}]`
          );
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          sectionClass.classList.add("active-link");
        } else {
          sectionClass.classList.remove("active-link");
        }
      });
    }

    window.addEventListener("scroll", handleScrollUp);

    return () => {
      window.removeEventListener("scroll", handleScrollUp);
    };
  });

  /*=============== SCROLL REVEAL ANIMATION ===============*/

  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>

      <Footer />

      {/* <!--========== SCROLL UP ==========--> */}
      <a
        href="#"
        className={`scrollup ${showScrollUp && "show-scroll"}`}
        id="scroll-up"
      >
        <i className="ri-arrow-up-line"></i>
      </a>

      {/* <!--=============== SCROLLREVEAL ===============--> */}
      <script src=""></script>

      {/* <!--=============== EMAIL JS ===============--> */}

      {/* <!--=============== MAIN JS ===============--> */}
    </>
  );
}

export default App;

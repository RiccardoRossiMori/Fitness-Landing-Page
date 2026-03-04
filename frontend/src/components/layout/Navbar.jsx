import { useEffect, useState } from "react";

function Navbar() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navbar = document.querySelector(".navbar");

    const handleScroll = () => {
      const navbarHeight = navbar.offsetHeight;

      let currentSection = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= navbarHeight && rect.bottom > navbarHeight) {
          currentSection = section;
        }
      });

      if (currentSection) {
        const navTheme = currentSection.dataset.navbar;
        if (navTheme) {
          setTheme(navTheme);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${theme === "light"
      ? "navbar-light bg-light shadow-sm"
      : "navbar-dark bg-transparent"}`}>
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">Fitness Gym</a>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="nav" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#hero">Home</a></li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonials">Testimonials</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

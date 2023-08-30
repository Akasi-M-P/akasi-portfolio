import { Bars4Icon } from "@heroicons/react/24/outline";
import "/src/css/Navbar.css";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";


const Navbar = () => {
  return (
    <header className="nav-header">
      <nav>
        <div className="nav-logo">
          <Link to="/">
            <h1>PAM.DEV</h1>
          </Link>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <ScrollLink
                to="projects-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
        <div className="nav-profile-pic">
          <img src="/images/Peter_clipdrop-relight.jpg" alt="" />
        </div>
        <div className="nav-burger-menu">
          <Bars4Icon className=" burger-menu-icon" />
        </div>
        <ul className="nav__links">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Explore</a>
          </li>
        </ul>
        <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

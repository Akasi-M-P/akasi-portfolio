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
          <Bars4Icon className="h-6 w-4 text-gray-500 burger-menu-icon" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

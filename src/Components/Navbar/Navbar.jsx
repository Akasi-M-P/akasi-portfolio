import { Bars4Icon } from "@heroicons/react/24/outline";
import "/src/css/Navbar.css"

const Navbar = () => {
  return (
    <>
      <header className="nav-header">
        <nav>
          <div className="nav-logo">
            <h1>PAM.DEV</h1>
          </div>
          <div className="nav-links">
            <ul>
              <li>
                <a href="">Projects</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div className="nav-profile-pic">
            <img src={"/src/assets/Peter_clipdrop-relight.jpg"} alt="" />
          </div>
          <div className="nav-burger-menu">
            <Bars4Icon className="h-6 w-4 text-gray-500 burger-menu-icon" />
          </div>
        </nav>
      </header>
    </>
  );
};
export default Navbar;

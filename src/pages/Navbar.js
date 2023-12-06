import classes from "./Navbar.module.css";

const Navbar = ({ activeSlide, onLinkClick }) => {
  const navLinks = [
    {
      name: "HOME",
    },
    {
      name: "ABOUT",
    },
    {
      name: "SERVICES",
    },
    {
      name: "PROJECTS",
    },
    {
      name: "TESTIMONIALS",
    },
    {
      name: "CLIENTS",
    },
    {
      name: "CONTACT",
    },
  ];
  return (
    <>
      <nav class="navbar navbar-expand-lg fixed-top">
        <a class="navbar-brand" href="#">
          <img
            src="/images/21 logo white inverted.png"
            alt=""
            className={classes.logo}
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img
            src="./images/toggle.svg"
            alt="navbar image"
            className="navbarimg"
          />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="m-auto">
            <ul className="navbar-nav  mt-2 mt-lg-0">
              {navLinks.map((link, i) => (
                <li className="nav-item" key={i}>
                  <a
                    className={`nav-link${i === activeSlide ? " active" : ""}`}
                    onClick={() => onLinkClick(i)}
                    href="#home"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <a href="tel:+91 9840151021" className={classes.number}>
              <i className="fa-solid fa-phone"></i> +91 98401 51021
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

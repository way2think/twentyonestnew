import { useState } from "react";
import classes from "./Navbar.module.css";

const Navbar = ({ activeSlide, onLinkClick }) => {
  const [openMenu, setOpenMenu] = useState("collapse");

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

  const handleMenuClick = (i) => {
    onLinkClick(i);
    // setOpenMenu(false)
  };

  //   const navlinks = document.querySelectorAll('.nav-item')
  // const menuToggle = document.getElementById('navbarSupportedContent')
  // const bsCollapse = bootstrap.Collapse.getOrCreateInstance(menuToggle, {toggle: false})
  // navlinks.forEach((l) => {
  //     l.addEventListener('click', () => { bsCollapse.toggle() })
  // })

  return (
    <>
      <nav class={`${classes.navbarover} navbar navbar-expand-lg fixed-top`}>
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

        <div className={`${classes.collapsenav} collapse navbar-collapse`} id="navbarSupportedContent">
          <div className="m-auto">
            <ul className={`${classes.navbarback} navbar-nav  mt-2 mt-lg-0`}>
              {navLinks.map((link, i) => (
                <li className="nav-item" key={i}>
                  <a
                    className={`nav-link${i === activeSlide ? " active" : ""}`}
                    onClick={() => handleMenuClick(i)}
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

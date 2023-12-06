import React, { useEffect, useRef, useState } from "react";
import Swiper from "swiper/bundle";
import Navbar from "./Navbar";
import Home from "../components/Home";
import classes from "./Main.module.css";
import About from "../components/About";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Clients from "../components/Clients";
import Contact from "../components/Contact";
import Testi from "../components/newTestimonial";

const interleaveOffset = 0.75;

function Main() {
  const swiperRef = useRef(null); // Create a ref for swiper
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    swiperRef.current = new Swiper(".swiper-container", {
      direction: "vertical",
      speed: 800,
      mousewheelControl: true,
      watchSlidesProgress: true,
      slideToClickedSlide: true,
      // mousewheel: true, // this comment it, don't use
      mousewheel: {
        // releaseOnEdges: true, // this comment it, don't use - which makes contact us bounce
        thresholdDelta: 50,
        thresholdTime: 1000,
      },
      scrollbar: {
        draggable: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: false,
        type: "bullets",
        renderBullet: function (index, className) {
          return (
            '<span class="' + className + '">' + ("0" + (index + 1)) + "</span>"
          );
        },
      },
      slidesPerView: 1, // Show only one slide at a time
      on: {
        slideChange: () => {
          if (swiperRef.current) {
            const totalSlides = swiperRef.current.slides.length;
            const progress = swiperRef.current.activeIndex / (totalSlides - 1);
            const threshold = 0.125; // Adjust the threshold as needed

            if (progress < threshold) {
              document.querySelector(
                ".vlt-fullpage-slider-progress-bar span"
              ).style.transform = `scaleY(${threshold})`;
            } else {
              document.querySelector(
                ".vlt-fullpage-slider-progress-bar span"
              ).style.transform = `scaleY(${progress})`;
            }
            setActiveSlide(swiperRef.current.activeIndex);
          }
          // scale-in
          // console.log(
          //   "*** mySwiper.activeIndex",
          //   (swiper.slides[swiper.activeIndex].querySelector(
          //     ".slide-inner"
          //   ).style.backgroundSize = "100%")
          // );
        },

        progress: function () {
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            let slideProgress = swiper.slides[i].progress;
            let innerOffset = swiper.height * interleaveOffset;
            let innerTranslate = slideProgress * innerOffset;

            swiper.slides[i].querySelector(
              ".slide-inner"
            ).style.transform = `translateY(${innerTranslate}px)`;
          }
        },
        setTransition: function (slider, speed) {
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = speed + "ms";
            swiper.slides[i].querySelector(".slide-inner").style.transition =
              speed + "ms";
          }
        },
      },
    });

    // Cleanup the Swiper instance when the component unmounts
    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true);
      }
    };
  }, []);

  // Add this inside your Main component or a custom React Hook
  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // No additional margin
      threshold: 0.9, // 50% of the target element must be visible
    };

    const observer = new IntersectionObserver((entries) => {
      const timerVal = activeSlide == 4 ? 100 : 200;
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // entry.target.classList.add("active"); // Add the active class
          setTimeout(() => {
            entry.target.classList.add("active");
          }, index * timerVal);
        } else {
          entry.target.classList.remove("active"); // Remove the active class
        }
      });
    }, options);

    // Observe all elements with the .fade-up class
    const fadeUpElements = document.querySelectorAll(".fade-up");
    fadeUpElements.forEach((element) => {
      observer.observe(element);
    });

    const scaleInOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const zoomObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const element = entry.target; // Get the observed element
        if (entry.isIntersecting) {
          element.classList.add("zoom-anim");
          entry.target.style.backgroundSize = "100%";
        } else {
          element.classList.remove("zoom-anim");
          entry.target.style.backgroundSize = "110%";
        }
      });
    }, scaleInOptions);

    const zoomAnim = document.querySelectorAll(".zoom-animation");

    zoomAnim.forEach((element) => {
      zoomObserver.observe(element);
    });

    // Cleanup the observer when the component unmounts
    return () => {
      observer.disconnect();
      zoomObserver.disconnect();
    };
  }, []);

  const handleNavClick = (currentSlide) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(currentSlide, 1500, true);
      setActiveSlide(currentSlide);
    }
  };

  return (
    <>
      <Navbar activeSlide={activeSlide} onLinkClick={handleNavClick} />
      <div className="swiper-container">
        <div className={classes.socialfixed}>
          <a
            target="_blank"
            href="https://www.youtube.com/@twentyonest"
            rel="noreferrer"
          >
            <img
              src="/images/Instagram-svg.svg"
              alt=""
              className={classes.insta}
            />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/twenty_onest?igshid=MTIyMzRjYmRlZg%3D%3D"
            rel="noreferrer"
          >
            <img src="/images/Instagram.svg" alt="" className={classes.insta} />
          </a>
          <a
            target="_blank"
            href="https://twitter.com/twenty_onest?t=UWma-u3TnUC_3cl23u310g&s=08"
            rel="noreferrer"
          >
            {" "}
            <img src="/images/Vector.svg" alt="" className={classes.insta} />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/company/twenty-onest/"
            rel="noreferrer"
          >
            {" "}
            <img src="/images/LinkedIn.svg" alt="" className={classes.insta} />
          </a>
        </div>
        <div className={`${classes.overslider1} slider swiper-wrapper`}>
          <div className={`${classes.overslider} swiper-slide`}>
            <div className={`${classes.slider1} slide-inner zoom-animation`}>
              <Home />
            </div>
          </div>
          <div className="swiper-slide">
            <div className={`${classes.slider2} slide-inner zoom-animation`}>
              <About />
            </div>
          </div>
          <div className="swiper-slide">
            <div className={`${classes.slider3} slide-inner`}>
              <Services />
            </div>
          </div>
          <div className="swiper-slide">
            <div className={`${classes.slider4} slide-inner`}>
              <Projects />
            </div>
          </div>
          <div className="swiper-slide">
            <div className={`${classes.slider5} slide-inner`}>
              <Testi />
            </div>
          </div>
          <div className="swiper-slide">
            <div className={`${classes.slider6} slide-inner`}>
              <Clients />
            </div>
          </div>
          <div className="swiper-slide">
            <div className={`${classes.slider6} slide-inner`}>
              <Contact />
            </div>
          </div>
        </div>

        <div className={`${classes.progress} vlt-fullpage-slider-progress-bar`}>
          <span style={{ transform: "scaleY(0.125)" }}></span>
        </div>

        <footer className={classes.footer}>
          <div>
            <p className={classes.twenty}>Twenty Onest</p>
            <p className={classes.twentyphone}>
              <i className="fa-solid fa-phone"></i> +91 98401 51021
            </p>
          </div>
          <p className={classes.mail1}>
            <img
              src="/images/Mask group (2).svg"
              alt=""
              className={classes.envolpe}
            />
            hey@twentyonest.in
          </p>
        </footer>
      </div>
    </>
  );
}

export default Main;

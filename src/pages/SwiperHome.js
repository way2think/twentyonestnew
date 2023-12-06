import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import the Swiper styles
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

function SwiperHome() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNavClick = (currentSlide) => {
    setActiveSlide(currentSlide);
  };

  const handleSlideChange = (swiper) => {
    // setActiveSlide(swiper.realIndex);
    const totalSlides = swiper.slides.length;
    const progress = swiper.activeIndex / (totalSlides - 1);
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
    setActiveSlide(swiper.activeIndex);
  };

  const handleProgressChange = (swiper) => {
    for (let i = 0; i < swiper.slides.length; i++) {
      let slideProgress = swiper.slides[i].progress;
      let innerOffset = swiper.height * interleaveOffset;
      let innerTranslate = slideProgress * innerOffset;

      swiper.slides[i].querySelector(
        ".slide-inner"
      ).style.transform = `translateY(${innerTranslate}px)`;
    }
  };

  const handleOnSetTransition = (slider, speed) => {
    let swiper = this;
    for (let i = 0; i < swiper.slides.length; i++) {
      swiper.slides[i].style.transition = speed + "ms";
      swiper.slides[i].querySelector(".slide-inner").style.transition =
        speed + "ms";
    }
  };

  return (
    <>
      <Navbar activeSlide={activeSlide} onLinkClick={handleNavClick} />
      <Swiper
        // className="swiper-container"
        direction="vertical"
        speed={800}
        mousewheel={true}
        watchSlidesProgress={true}
        mousewheelControl={{
          releaseOnEdges: true,
          thresholdDelta: 50,
          thresholdTime: 1000,
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: false,
          type: "bullets",
          renderBullet: (index, className) => {
            return (
              '<span class="' +
              className +
              '">' +
              ("0" + (index + 1)) +
              "</span>"
            );
          },
        }}
        slidesPerView={1}
        onSlideChange={handleSlideChange}
        onProgress={handleProgressChange}
        onSetTransition={handleOnSetTransition}
      >
        <div className={classes.socialfixed}>
          <a href="/">
            <img src="/images/Vector1.svg" alt="" className={classes.insta} />
          </a>
          <a href="/">
            <img src="/images/Instagram.svg" alt="" className={classes.insta} />
          </a>
          <a href="/">
            {" "}
            <img src="/images/Vector.svg" alt="" className={classes.insta} />
          </a>
          <a href="/">
            {" "}
            <img src="/images/LinkedIn.svg" alt="" className={classes.insta} />
          </a>
        </div>
        <div className={`${classes.overslider1} slider swiper-wrapper`}>
          <SwiperSlide className="swiper-slide" style={{}}>
            <div className={`${classes.slider1} slide-inner zoom-animation`}>
              <Home />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${classes.slider2} slide-inner zoom-animation`}>
              <About />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${classes.slider3} slide-inner`}>
              <Services />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${classes.slider4} slide-inner`}>
              <Projects />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${classes.slider5} slide-inner`}>
              <Testi />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${classes.slider6} slide-inner`}>
              <Clients />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${classes.slider6} slide-inner`}>
              <Contact />
            </div>
          </SwiperSlide>
        </div>
      </Swiper>

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
    </>
  );
}

export default SwiperHome;

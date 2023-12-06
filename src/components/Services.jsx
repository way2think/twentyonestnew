import React, { useMemo, useState } from "react";
import "./newServices.css";
import Card from "./ServiceCard";

const Services = () => {
  //data
  const sliderData = [
    {
      title: "Design",
      content_prim: (
        <>
          <div>
            In this fast-paced technology-driven world, we believe in taking a
            step back in design as the way forward.
          </div>
          <div>
            We adopt a human approach to aesthetics and design to evoke an
            emotional response.
          </div>
        </>
      ),
      content_sec:
        "We adopt a human approach to aesthetics and design to evoke an emotional response.",
      list: [
        { img_url: "/images/Brand identity 2.gif", text: "Brand identity" },
        { img_url: "/images/package 2.gif", text: "Package design" },
        { img_url: "/images/ui ux 2.gif", text: "UI/UX" },
        { img_url: "/images/Brand assets 2.gif", text: "Brand assets" },
        {
          img_url: "/images/motion graphics 2.gif",
          text: "Visual/ Motion design",
        },
      ],
    },
    {
      title: "Digital & Social",
      content_prim:
        "The world is constantly evolving with respect to how customers behave and their purchase decision is often expedited by evaluating brands digitally. As a brand, it is now imperative to have a strong digital presence to capture customer interest and be a part of his/her decision making. We've got you covered in going digital, the right way!",
      list: [
        {
          img_url: "/images/website 2.gif",
          text: "Website & Mobile app development",
        },
        {
          img_url: "/images/social media 2.gif",
          text: "Social media marketing",
        },
        {
          img_url: "/images/performance marketing 2.gif",
          text: "Performance marketing",
        },
        {},
        {},
      ],
    },
    {
      title: "Advertising",
      content_prim:
        "Every brand needs activities that help create awareness, interest and desire that translates to actionable outcomes. One such effective way is the choice of advertising your brand through various effective channels. Based on your brand, we integrate your brand communications by providing an advertising plan that best suits your needs!",
      list: [
        { img_url: "/images/print 2 (1).gif", text: "Print" },
        {
          img_url: "/images/Electronic - TV & Radio 2.gif",
          text: "Electronic - TV & Radio",
        },
        { img_url: "/images/OOH 2.gif", text: "OOH" },
        {
          img_url: "/images/Media planning & buying 2.gif",
          text: "Media planning & buying",
        },
        { img_url: "/images/Public Relations.gif", text: "Public relations" },
      ],
    },
    {
      title: "Films and Production",
      content_prim:
        "Your brand story is just a call away from being produced by us! Let us create your captivating brand story that speaks to the world about your brand, vision, products and promise. We have the best ad directors on board to shoot commercials that resonate with your audiences and give you results.",
      list: [
        { img_url: "/images/TV commerials.gif", text: "TV commercials" },
        {
          img_url: "/images/Social Media Commercials.gif",
          text: "Social media commercials",
        },
        { img_url: "/images/Featured stories.gif", text: "Featured stories" },
        {},
        {},
      ],
    },
  ];
  //state
  const [curIndex, setCurIndex] = useState(0);
  const [curData, setCurData] = useState({});
  //helpers
  const anim = () => {
    document
      .querySelectorAll("#anim")
      .forEach((item) => (item.style.display = "none"));
    document
      .querySelectorAll("#anim")
      .forEach((item) => item.classList.remove("active"));
  };
  const move = (index) => {
    anim();
    setCurIndex(index);
  };
  //handlers
  const onPrev = () => {
    let index = curIndex;
    if (curIndex === 0) {
      index = sliderData.length - 1;
    } else {
      index = index - 1;
    }
    move(index);
  };
  const onNext = () => {
    let index = curIndex;
    if (curIndex === sliderData.length - 1) {
      index = 0;
    } else {
      index = index + 1;
    }
    move(index);
  };
  const handleDotClick = (i) => {
    if (i === curIndex) return;
    move(i);
  };

  //data and animation
  useMemo(() => {
    setCurData(sliderData[curIndex]);
    setTimeout(() => {
      document
        .querySelectorAll("#anim")
        .forEach((item) => (item.style.display = "block"));
    }, 100);
    setTimeout(() => {
      document
        .querySelectorAll("#anim")
        .forEach((item) => item.classList.add("active"));
    }, 400);
  }, [curIndex]);

  let ui = null;
  if (window.innerWidth <= 768) {
    ui = (
      <div>
        <img
          className={`bg-pos ${curIndex === 0 ? "active-bg" : ""}`}
          src="/images/services Mobile.svg"
          alt="bg-1"
        />
        <img
          className={`bg-pos ${curIndex === 1 ? "active-bg" : ""}`}
          src="/images/digital bg service.svg"
          alt="bg-2"
        />
        <img
          className={`bg-pos ${curIndex === 2 ? "active-bg" : ""}`}
          src="/images/services flim.svg"
          alt="bg-3"
        />
        <img
          className={`bg-pos ${curIndex === 3 ? "active-bg" : ""}`}
          src="/images/services flim.svg"
          alt="bg-4"
        />
      </div>
    );
  } else {
    ui = (
      <div>
        <img
          className={`bg-pos ${curIndex === 0 ? "active-bg" : ""}`}
          src="/images/Services bg 1.png"
          alt="bg-1"
        />
        <img
          className={`bg-pos ${curIndex === 1 ? "active-bg" : ""}`}
          src="/images/Services bg 2.png"
          alt="bg-2"
        />
        <img
          className={`bg-pos ${curIndex === 2 ? "active-bg" : ""}`}
          src="/images/Services bg 3.png"
          alt="bg-3"
        />
        <img
          className={`bg-pos ${curIndex === 3 ? "active-bg" : ""}`}
          src="/images/Services bg 3.png"
          alt="bg-4"
        />
      </div>
    );
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 768) {
      ui = (
        <div>
          <img
            className={`bg-pos ${curIndex === 0 ? "active-bg" : ""}`}
            src="/images/services Mobile.svg"
            alt="bg-1"
          />
          <img
            className={`bg-pos ${curIndex === 1 ? "active-bg" : ""}`}
            src="/images/digital bg service.svg"
            alt="bg-2"
          />
          <img
            className={`bg-pos ${curIndex === 2 ? "active-bg" : ""}`}
            src="/images/services flim.svg"
            alt="bg-3"
          />
          <img
            className={`bg-pos ${curIndex === 3 ? "active-bg" : ""}`}
            src="/images/services flim.svg"
            alt="bg-4"
          />
        </div>
      );
    } else {
      ui = (
        <div>
          <img
            className={`bg-pos ${curIndex === 0 ? "active-bg" : ""}`}
            src="/images/Services bg 1.png"
            alt="bg-1"
          />
          <img
            className={`bg-pos ${curIndex === 1 ? "active-bg" : ""}`}
            src="/images/Services bg 2.png"
            alt="bg-2"
          />
          <img
            className={`bg-pos ${curIndex === 2 ? "active-bg" : ""}`}
            src="/images/Services bg 3.png"
            alt="bg-3"
          />
          <img
            className={`bg-pos ${curIndex === 3 ? "active-bg" : ""}`}
            src="/images/Services bg 3.png"
            alt="bg-4"
          />
        </div>
      );
    }
  });

  return (
    <>
      <div className="postion-center">
        {ui}
        <div className="d-flex w-100 slider-content-container width-fit">
          {/* Left arrow */}
          <div
            role="button"
            className="slider-arrow left-arrow col-1 text-white"
            onClick={() => onPrev()}
          >
            <i className="fas fa-chevron-left " aria-hidden="true"></i>
          </div>
          {/* Content */}
          <div className="col-10 px-2 d-flex flex-column justify-content-center">
            <Card curData={curData} />
            <div className="d-flex flex-row slider-dots justify-content-center  bottom-2">
              {[...Array(sliderData.length).keys()].map((itemI) => (
                <i
                  role="button"
                  onClick={() => handleDotClick(itemI)}
                  className={`fa fa-circle${
                    itemI === curIndex ? " active" : ""
                  }`}
                  aria-hidden="true"
                ></i>
              ))}
            </div>
          </div>
          {/* Right arrow */}
          <div
            role="button"
            className="slider-arrow  right-arrow col-1 text-white"
            onClick={() => onNext()}
          >
            <i className="fas fa-chevron-right " aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

import React, { useState, useEffect } from "react";
import classes from "./Testimonial.module.css";

const Testi = () => {
  const data = [
    {
      comment:
        "I like the ingenuity that these folks bring to their work. They are a young team, they think differently, keep with the trends, yet ensure that they highlight the essence of the brand. Their turn around is quick along with nearly flawless copy and design.",
      person: "Sandhya Kumar",
      designation: "Head ",
      loction: "Corporate Communications",
      img_url: "/images/sf 2.svg",
    },
    {
      comment:
        "The pan-India branding conceptualised and designed by Twenty Onest helped us connect with our target audience leading to a ₹30 crore(+75% increase) in our revenue!",
      person: "Jennifer Joseph",
      designation: "Deputy Manager",
      loction: "Corporate Communications",
      img_url: "/images/sf 2.svg",
    },
    {
      comment:
        "Technically sound, professional with tremendous work ethics. Knowledge to adapt to any field. A systematic manner of work. Feeling proud to be associated with them. Looking forward to our long journey!",
      person: "Santhosh Gopi",
      designation: "ICC - Certified Cricket Coach",
    },
  ];

  const [slideIndex, setSlideIndex] = useState(0);

  const prev = () => {
    let index = slideIndex;
    if (slideIndex == 0) {
      index = data.length - 1;
    } else index = index - 1;
    setSlideIndex(index);
  };

  const next = () => {
    let index = slideIndex;
    if (slideIndex == data.length - 1) {
      index = 0;
    } else index = index + 1;
    setSlideIndex(index);
  };

  const renderArrow = () => (
    <div className="arrow-container">
      <a className={`${classes.arrow} text-white prev`} onClick={() => prev()}>
        <i class="fa fa-angle-left" aria-hidden="true"></i>
      </a>
      <a className={`${classes.arrow} text-white next`} onClick={() => next()}>
        <i class="fa fa-angle-right" aria-hidden="true"></i>
      </a>
    </div>
  );

  return (
    <>
      <div
        className={`${classes.slidershow} slideshow-container zoom-animation`}
      >
        <div className="slide-outer-container">
          {data.map((item, i) => (
            <div className="mySlides" key={i}>
              <div
                className={`testi-container fixed-height text-white  row ${
                  i == slideIndex ? "d-flex" : "d-none"
                }`}
              >
                <div className="col-md-8">
                  <div className="overllimg mb-2 fade-up">
                    <img
                      src="/images/left-quote.png"
                      alt="comment"
                      className="apostropheImg"
                    />
                  </div>
                  <h6 className="pt-2 testi-comment fade-up">{item.comment}</h6>
                </div>
                <div className="content-over col-md-4">
                  <div className="fade-up">
                    <h6 className="testi-person">{item.person}</h6>
                    <p className="font-style-r ">{item.designation}</p>
                    <p className="font-style-r ">{item.loction}</p>
                  </div>
                  <div style={{ height: "4rem" }} className="fade-up">
                    {item.img_url && (
                      <img src={item.img_url} className="sflogo " alt="" />
                    )}
                  </div>
                  <div className="testi-container pt-1">
                    <div></div>
                    <div>{renderArrow()}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testi;

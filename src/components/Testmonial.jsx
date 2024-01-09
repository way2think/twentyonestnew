import React, { useState, useEffect } from "react";
import classes from "./Testimonial.module.css";

const Testmonial = () => {
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

  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  const plusSlides = (n) => {
    setSlideIndex(slideIndex + n);
  };

  const showSlides = (n) => {
    const slides = document.getElementsByClassName("mySlides");
    if (slides.length === 0) {
      // No slides found, do nothing
      return;
    }
    if (n > slides.length) {
      setSlideIndex(1);
      return;
    }
    if (n < 1) {
      setSlideIndex(slides.length);
      return;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  };

  const renderArrow = () => (
    <div className="arrow-container">
      <a
        className={`${classes.arrow} text-white prev`}
        onClick={() => plusSlides(-1)}
      >
        <i class="fa fa-angle-left" aria-hidden="true"></i>
      </a>
      <a
        className={`${classes.arrow} text-white next`}
        onClick={() => plusSlides(1)}
      >
        <i class="fa fa-angle-right" aria-hidden="true"></i>
      </a>
    </div>
  );

  return (
    <>
      <div className={`${classes.slidershow} slideshow-container`}>
        <div className={`${classes.outer} slide-outer-container`}>
          {data.map((item, i) => (
            <div className="mySlides" key={i}>
              <div className="testi-container text-white fixed-height row">
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
                  <h6 className="testi-person fade-up">{item.person}</h6>
                  <p className="font-style-r fade-up">{item.designation}</p>
                  <p className="font-style-r fade-up">{item.loction}</p>
                  <div style={{ height: "4rem" }}>
                    {item.img_url && (
                      <img
                        src={item.img_url}
                        className="sflogo fade-up"
                        alt=""
                      />
                    )}
                  </div>
                  <div className="testi-container pt-4">
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

export default Testmonial;

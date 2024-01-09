import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators1"
        className="overallcarousel carousel slide"
        data-ride="carousel"
        data-interval="false"
      >
        <ol className="indicators carousel-indicators">
          <li
            data-target="#carouselExampleIndicators1"
            data-slide-to="0"
            
            className="active"
            id="dot"
          ></li>
          <li
            data-target="#carouselExampleIndicators1"
            id="dot"
            data-slide-to="1"
          ></li>
          <li
            data-target="#carouselExampleIndicators1"
            id="dot"
            data-slide-to="2"
          ></li>
        </ol>
        <div className="inner carousel-inner">
          <div className="carosueloverlay carousel-item  active">
            <div className="overallrow row container">
              <div className="caro col-md-6">
                <h3 className="title1 fade-up">G Square</h3>
                <p className="content fade-up">
                  Lead generation creatives for 40+ residential, commercial and
                  industrial plotted development projects across 8 cities.
                </p>
                <button className="button fade-up">
                  Download our portfolio
                </button>
              </div>
              <div className="col-md-6 image-square fade-up">
                <img src="../images/Gsquare 2.png" alt="" className="gsquare" />
              </div>
            </div>
          </div>
          <div className="carosueloverlay2 carousel-item">
            <div className="overallrow row container">
              <div className="caro col-md-6">
                <h3 className="title1 fade-up">KVP</h3>
                <p className="content fade-up">
                  Retail package design and mobile application development for
                  B2B vendor payments.
                </p>
                <button className="button fade-up">
                  Download our portfolio
                </button>
              </div>
              <div className="col-md-6 image-square fade-up">
                <img src="../images/KVP 1.png" alt="" className="gsquare2" />
              </div>
            </div>
          </div>
          <div className="carosueloverlay3 carousel-item">
            <div className="overallrow row container">
              <div className="caro col-md-6">
                <h3 className="title1 fade-up">Sundaram Finance</h3>
                <p className="content fade-up">
                  Product-specific campaigns (digital and OOH) and marketing
                  collateral for circulation across 650+ branches pan India.
                </p>
                <button className="button fade-up">
                  {" "}
                  Download our portfolio
                </button>
              </div>
              <div className="col-md-6 image-square fade-up">
                <img src="../images/sf (2).png" alt="" className="gsquare1" />
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators1"
          role="button"
          data-slide="prev"
        >
          {/* <span className="carousel-control-prev-icon" ></span> */}
          <i className="fas fa-chevron-left " aria-hidden="true"></i>
          {/* <span className="sr-only">Previous</span> */}
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators1"
          role="button"
          data-slide="next"
        >
          {/* <span className="carousel-control-next-icon" ></span> */}
          <i className="fas fa-chevron-right" aria-hidden="true"></i>
          {/* <span className="sr-only">Next</span> */}
        </a>
      </div>
    </>
  );
};

export default Projects;

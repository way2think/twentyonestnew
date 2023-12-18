import { useMemo, useState } from "react";
import classes from "./Clients.module.css";
import Card from "./ClientCard";

const Clients = () => {
  const sliderData = [
    {
      content_prim: (
        <div>
          <div className={`${classes.Servicescontent} col-md-2 col-lg-2`}>
            <img
              src="/images/client 1.png"
              alt=""
              className={classes.clientsimg}
            />
          </div>
        </div>
      ),
    },
    {
      content_prim: (
        <div>
          <div className={`${classes.Servicescontent} col-md-3 col-lg-2`}>
            <img
              src="/images/client 2.png"
              alt=""
              className={classes.clientsimg}
            />
          </div>
        </div>
      ),
    },
    {
      content_prim: (
        <div>
          <div className={`${classes.Servicescontent} col-md-2 col-lg-2`}>
            <img
              src="/images/client 3.png"
              alt=""
              className={classes.clientsimg}
            />
          </div>
        </div>
      ),
    },
    {
      content_prim: (
        <div>
          <div className={`${classes.Servicescontent} col-md-2 col-lg-2`}>
            <img
              src="/images/client 4.png"
              alt=""
              className={classes.clientsimg}
            />
          </div>
        </div>
      ),
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
      <>
        <img
          src="./images/client logo.png"
          alt=""
          className={`${classes.clientlogo} `}
        />
      </>
    );
  } else {
    ui = (
      <img
        src="./images/client logo.png"
        alt=""
        className={`${classes.clientlogo} `}
      />
    );
  }
  return (
    <>
      <div className={classes.clients}>
        <div className="postion-center ">
          <div
            className="d-flex w-100 slider-content-container width-fit  "
            style={{ color: "white" }}
          >
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
              <div className="d-flex flex-row slider-dots  bottom-2 justify-content-center">
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
      </div>

      <div className={`${classes.overallclients} zoom-animation`}>
        {/* <div className={`${classes.Services} row container`}>
          <div className={`${classes.Servicescontent} col-md-3 col-lg-3`}>
            <img src="/images/sf 1.svg" alt="" className={classes.clientsimg} />
          </div>
          <div className={`${classes.Servicescontent} col-md-2 col-lg-2`}>
            <img
              src="/images/gsquare 1.svg"
              alt=""
              className={classes.clientsimg}
            />
          </div>
          <div className={`${classes.Servicescontent} col-md-2 col-lg-2`}>
            <img
              src="/images/casagrand 1.svg"
              alt=""
              className={classes.clientsimg}
            />
          </div>
          <div className={`${classes.Servicescontent} col-md-2 col-lg-2`}>
            <img
              src="/images/zxdsdlklgszsAsset 1@2x 1.svg"
              alt=""
              className={classes.clientsimg}
            />
          </div>
          <div className={`${classes.Servicescontent} col-md-2 col-lg-2`}>
            <img
              src="/images/jallikattu.svg"
              alt=""
              className={classes.clientsimg}
            />
          </div>
        </div>
        <div className={`${classes.Services} row container`}>
          <div className={`${classes.Servicescontent} col-md-3 col-lg-3`}>
            <img
              src="/images/sbs_logow 1.svg"
              alt=""
              className={classes.clientsimg}
            />
          </div>
          <div className={`${classes.Servicescontent} col-md-2 col-lg-2`}>
            <img
              src="/images/diya 1.svg"
              alt=""
              className={classes.clientsimg}
            />
          </div>
          <div className={`${classes.Servicescontent} col-md-2 col-lg-2`}>
            <img
              src="/images/murugan 1.svg"
              alt=""
              className={classes.clientsimg}
            />
          </div>
          <div className={`${classes.Servicescontent} col-md-2 col-lg-2`}>
            <img
              src="/images/acc 1.svg"
              alt=""
              className={classes.clientsimg}
            />
          </div>
          <div className={`${classes.Servicescontent} col-md-2 col-lg-2`}>
            <img
              src="/images/jarvis den 1.svg"
              alt=""
              className={classes.clientsimg}
            />
          </div>
        </div>
        <div className={`${classes.Services} row container`}>
          <div className={`${classes.Servicescontent} col-md-3 col-lg-3`}>
            <img src="/images/rkr.svg" alt="" className={classes.clientsimg} />
          </div>
          <div className={`${classes.Servicescontent} col-md-2 col-lg-2`}>
            <img
              src="/images/crikle.svg"
              alt=""
              className={classes.clientsimg}
            />
          </div>
          <div className={`${classes.Servicescontent} col-md-2 col-lg-2`}>
            <img
              src="/images/maamis 1.svg"
              alt=""
              className={classes.clientsimg}
            />
          </div>
          <div className={`${classes.Servicescontent} col-md-2 col-lg-2`}>
            <img
              src="/images/test ocean.svg"
              alt=""
              className={classes.clientsimg}
            />
          </div>
          <div className={`${classes.Servicescontent} col-md-2 col-lg-2`}>
            <img
              src="/images/organic.svg"
              alt=""
              className={classes.clientsimg}
            />
          </div>
        </div>
        <div className={`${classes.Services} row container`}>
          <div className={`${classes.Servicescontent} col-md-3 col-lg-3`}>
            <img
              src="/images/2 fpohhpameAsset 2@2x 1.svg"
              alt=""
              className={classes.clientsimg}
            />
          </div>
          <div className={`${classes.Servicescontent} col-md-2 col-lg-2`}>
            <img src="/images/wink.svg" alt="" className={classes.clientsimg} />
          </div>
          <div className={`${classes.Servicescontent} col-md-2 col-lg-2`}>
            <img
              src="/images/LOGO-WHITE 1 1.svg"
              alt=""
              className={classes.clientsimg}
            />
          </div>
          <div className={`${classes.Servicescontent} col-md-2 col-lg-2`}>
            <img
              src="/images/kvp 1.svg"
              alt=""
              className={classes.clientsimg}
            />
          </div>
          <div className={`${classes.Servicescontent} col-md-2 col-lg-2`}>
            <img src="/images/arte.svg" alt="" className={classes.clientsimg} />
          </div>
        </div> */}
        {ui}
      </div>
    </>
  );
};

export default Clients;

import classes from "./Clients.module.css";

const Clients = () => {
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

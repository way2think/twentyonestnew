// Home.jsx

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import classes from "./Home.module.css";
import "../index.css";

const Home = () => {
  const [topPosition, setTopPosition] = useState("70%");

  useEffect(() => {
    const updateTopPosition = () => {
      const windowHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
      const calculatedTop = windowHeight * 0.7 + "px";
      setTopPosition(calculatedTop);
    };

    // Update the top position when the window is resized
    window.addEventListener("resize", updateTopPosition);

    // Initial calculation
    updateTopPosition();

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", updateTopPosition);
    };
  }, []);

  const animateProp = {
    initial: { y: "50%", opacity: 0 },
    animate: { y: 0, opacity: 1, ease: "easeOut" },
  };

  return (
    <div className={`${classes.overlaycontent} row container`}>
      <div className={`${classes.content} row container`}>
        <div
          className={`${classes.contentTitle} col-md-5`}
          // style={{ top: topPosition }}
        >
          <motion.div
            {...animateProp}
            transition={{ duration: 1, delay: 1 * 0.1 }}
            className={classes.absoluteText}
          >
            <p className={`${classes.firsttitle}`}>
              Every brand has a <span className={classes.story}>story..</span>
            </p>
          </motion.div>
          <motion.p
            {...animateProp}
            transition={{ duration: 1, delay: 2 * 0.1 }}
            className={`${classes.secondtitle} ${classes.absoluteText}`}
          >
            Let’s make yours
          </motion.p>
          <motion.p
            {...animateProp}
            transition={{ duration: 1, delay: 3 * 0.1 }}
            className={`${classes.thirdtitle} ${classes.absoluteText}`}
          >
            {/* <span className={classes.red}>ROI</span> */}
            unforgettable!
          </motion.p>
        </div>
        <div
          className={`${classes.contentMobile} col-md-5`}
          // style={{ top: topPosition }}
        >
          <motion.div
            {...animateProp}
            transition={{ duration: 1, delay: 1 * 0.1 }}
            className={classes.absoluteText}
          >
            <p className={`${classes.firsttitle}`}>
              Every brand has a <span className={classes.story}>story..</span>
            </p>
          </motion.div>
          <motion.p
            {...animateProp}
            transition={{ duration: 1, delay: 2 * 0.1 }}
            className={`${classes.secondtitle} ${classes.absoluteText}`}
          >
            Let’s make yours
          </motion.p>
          <motion.p
            {...animateProp}
            transition={{ duration: 1, delay: 3 * 0.1 }}
            className={`${classes.thirdtitle} ${classes.absoluteText}`}
          >
            {/* <span className={classes.red}>ROI</span> */}
            unforgettable!
          </motion.p>
        </div>
      </div>
      <div className={`${classes.imagecontent} col-md-5`}>
        {/* Your image content */}
      </div>
    </div>
  );
};

export default Home;

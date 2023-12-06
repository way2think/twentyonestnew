import classes from "./Home.module.css";
import "../index.css";
import { motion } from "framer-motion";

const Home = () => {
  const animateProp = {
    initial: { y: "50%", opacity: 0 },
    animate: { y: 0, opacity: 1, ease: "easeOut" },
  };

  return (
    <div className={`${classes.overlaycontent} row container`}>
      <div className={`${classes.content} col-md-5`}>
        <motion.div
          {...animateProp}
          transition={{ duration: 1, delay: 1 * 0.1 }}
        >
          <p className={`${classes.firsttitle}`}>
            Every brand has a <span className={classes.story}>story..</span>
          </p>
        </motion.div>
        <motion.p
          {...animateProp}
          transition={{ duration: 1, delay: 2 * 0.1 }}
          className={`${classes.secondtitle}`}
        >
          Let’s make yours
        </motion.p>
        <motion.p
          {...animateProp}
          transition={{ duration: 1, delay: 3 * 0.1 }}
          className={`${classes.thirdtitle}`}
        >
          {/* <span className={classes.red}>ROI</span> */}
          unforgettable!
        </motion.p>
      </div>
      <div className={`${classes.imagecontent} col-md-5`}>
        {/* <img
        src="/images/vintage-film-projector-film-screening.jpg"
        alt=""
        className={classes.homepage}
      /> */}
      </div>
    </div>
  );
};

export default Home;

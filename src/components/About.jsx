import classes from "./About.module.css";

const About = () => {
  return (
    <>
      <div className={`${classes.about} row container`}>
        <div className={`${classes.aboutcontent} col-md-5`}>
          <p className={`${classes.abouttitle} multiline-paragraph`}>
            We believe in the <span className={classes.sim}>power of simplicity</span>
            <br /> to make brands impactful and distinctive.
          </p>
        </div>
        <div className={`${classes.imagecontent} col-md-5`}>
          {/* <img
        src="/images/vintage-film-projector-film-screening.jpg"
        alt=""
        className={classes.homepage}
      /> */}
        </div>
      </div>
    </>
  );
};

export default About;

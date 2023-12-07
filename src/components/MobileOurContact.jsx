import classes from "./MobileOurContact.module.css";
import { useState } from "react";
import Select from "./Select";

const MobileOurContact = () => {
  //   document.getElementById("selectbox1").addEventListener("change", function () {
  //     var selectedOption = this.options[this.selectedIndex];
  //     selectedOption.style.backgroundColor = "#000"; // Change the background color of the selected option
  //     selectedOption.style.color = "#333"; // Change the text color of the selected option
  //   });
  const [options, setOptions] = useState([
    "Design",
    "Digital & Social",
    "Advertising",
    "Filims & Production",
  ]);

  return (
    <>
      <div className={`${classes.Contactsmobile} zoom-animation`}>
        <div className={`${classes.Contactcontainer} container`}>
          <div className={`${classes.Contactcontainer} container`}>
            <div className={`${classes.Servicescontent1} `}>
              <h3 className={classes.contacttitle}>Contact</h3>
              <p className={classes.para1}>
                {" "}
                <img
                  src="/images/Mask group.svg"
                  alt=""
                  className={classes.clientsimg}
                />
                +91 98401 51021
              </p>
              <p className={classes.para1}>
                {" "}
                <img
                  src="/images/Mask group (1).svg"
                  alt=""
                  className={classes.clientsimg}
                />
                hey@twentyonest.in
              </p>
              <div className={classes.address1}>
                <img
                  src="/images/Chennai.png"
                  alt=""
                  className={classes.addressimg}
                />
                <div className={classes.addresscontent}>
                  <h3 className={classes.addresstitle}>CHENNAI</h3>
                  <p className={classes.add1}>
                    No. 40, Rukmani Street, West Mambalam, Chennai, Tamil Nadu
                    600 033
                  </p>
                </div>
              </div>
              <div className={classes.address1}>
                <img
                  src="/images/Bengaluru.png"
                  alt=""
                  className={classes.addressimg}
                />
                <div className={classes.addresscontent}>
                  <h3 className={classes.addresstitle}>BENGALURU</h3>
                  <p className={classes.add1}>
                    Novel Business Park, #57, 13th Cross, Baldwins Road,
                    Koramangala, <br />
                    Bengaluru, Karnataka 560 030
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileOurContact;

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import slider1 from "../../Assets/Images/Backround/slider-mainbg-01.jpg";
import slider2 from "../../Assets/Images/Backround/slider-mainbg-02.jpg";
import slider3 from "../../Assets/Images/Backround/slider-mainbg-03.jpg";
import StaffNavbar from "../../Navbar/StaffNavbar";

const StaffLanding = () => {
  return (
    <>
      <StaffNavbar />

      <Carousel showThumbs={false} transitionTime={0.001}>
        <div>
          <img src={slider1} alt="" />
        </div>
        <div>
          <img src={slider2} alt="" />
        </div>
        <div>
          <img src={slider3} alt="" />
        </div>
      </Carousel>
    </>
  );
};

export default StaffLanding;

import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/shadow dog.jpg";
import Ecommerce from "../../img/worldwise.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/doodle.jpg";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt=""  height={250}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" height={250} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" height={250} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt=""  height={250}/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;

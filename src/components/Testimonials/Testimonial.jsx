import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/jump.jpg";
import profilePic2 from "../../img/dog.jpg";
import profilePic3 from "../../img/world.jpg";
// import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Doodle Jump is a fun and simple game where players help a character jump higher by landing on platforms while dodging enemies and obstacles. Built using JavaScript, HTML, and CSS, it demonstrates expertise in game development, with smooth animations, real-time interactions, and responsive design. This project highlights skills in DOM manipulation, CSS animations, and interactive UI development.",
    },
    {
      img: profilePic2,
      review:
        "Shadow Dog is an immersive game featuring parallax scrolling for a rich visual experience. Developed using HTML, CSS, and JavaScript, it highlights expertise in random object generation, adding variability to the gameplay. Event listeners and DOM manipulation are used to enhance interaction based on player actions, showcasing creativity and advanced scripting. This project emphasizes dynamic game design and interactive functionality.",
    },
    {
      img: profilePic3,
      review:
        "World-Wise is a Single Page Application built with React.js, where users can add and share their travel experiences through an interactive map. The app uses React Hooks, Context API, and Redux for efficient and scalable state management. It features modular styling with module CSS for clean, maintainable code.",
    },
    // {
    //   img: profilePic4,
    //   review:
    //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    // },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>About  </span>
        <span>the project  </span>
        <span>I’ve created and what it brings to the table..</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;

import React, { useRef } from "react";
import "@mantine/core/styles.css";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import Autoplay from "embla-carousel-autoplay";
// import image_1 from "./../../assets/mage-1.png";
import image_1 from "./../assets/image-1.png";
// import image_2 from "./../../assets/mage-2.png";
import image_2 from "./../assets/image-2.png";
import image_3 from "./../assets/image (6).png";

const slides = [
  {
    img: image_1,
    text: "With NovaCRM, your customer relationship can be enjoyable as your product.",
    name: "Natukunda Cathy",
    role: "Tech Lead, WindSol",
  },
  {
    img: image_2,
    text: "This platform improved our workflow and productivity a lot.",
    name: "Rizwan Khan",
    role: "Frontend Developer",
  },
  {
    img: image_3,
    text: "Amazing experience! Highly recommended for modern teams.",
    name: "Rizwan",
    role: "UI Designer",
  },
];

const Sliders = () => {
  const autoplay = useRef(Autoplay({ delay: 3000 })); // 3 sec

  return (
    <Carousel
      withIndicators
      height={800}
      loop
      plugins={[autoplay.current]} // ✅ THIS IS IMPORTANT
    >
      {slides.map((slide, index) => (
        <Carousel.Slide key={index}>
          <div style={{ position: "relative " }}>
            {/* Image */}
            <img
              src={slide.img}
              alt="slide"
              style={{
                width: "100%",
                height: "800px",
                objectFit: "cover",
              }}
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/800x500";
              }}
            />

            {/* Overlay */}
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                right: "20px",
                background: "rgba(0,0,0,0.5)",
                color: "white",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <p>"{slide.text}"</p>
              <h4>{slide.name}</h4>
              <small>{slide.role}</small>
            </div>
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default Sliders;

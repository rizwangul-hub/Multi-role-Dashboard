import React from 'react'
import '@mantine/core/styles.css';
import { Carousel } from '@mantine/carousel';
// ‼️ import carousel styles after core package styles
import '@mantine/carousel/styles.css';
import image_1 from "../../public/image/image (6).png"

const Sliders = () => {
    
  return (
    <div>
        <Carousel withIndicators height={1000} w={580}>
      <Carousel.Slide><img src={image_1} alt="Slide 1" /></Carousel.Slide>
      <Carousel.Slide><img src={image_1} alt="Slide 2" /></Carousel.Slide>
      <Carousel.Slide><img src={image_1} alt="Slide 3" /></Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
    </div>
  )
}

export default Sliders
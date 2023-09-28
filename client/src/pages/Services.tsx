import React from 'react';
import Slider from 'react-slick'
import {Settings} from 'react-slick'
// import { BiLeftArrowAlt, BiRightArrowAlt } from '@chakra-ui/icons';

interface CarouselProps {
  settings?: Settings;
}

const Services: React.FC<CarouselProps> = ({ settings }) => {
  return (
    <Slider {...settings}>
      <div>Slide 1</div>
      <div>Slide 2</div>
      <div>Slide 3</div>
    </Slider>
  );
};

export default Services;

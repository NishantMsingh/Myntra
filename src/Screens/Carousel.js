import React from "react";
import car1 from "../Assets/Images/carosuel1.png"
import car2 from "../Assets/Images/carosuel2.png"
import car3 from "../Assets/Images/carosuel3.png"
import car4 from "../Assets/Images/carosuel4.png"
import car5 from "../Assets/Images/carosuel5.png"
import car6 from "../Assets/Images/carosuel6.png"
import { Carousel } from 'react-bootstrap';
const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={car6}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={car2}
          alt="Second slide"
        />
      </Carousel.Item> 
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={car3}
          alt="Second slide"
        />
      </Carousel.Item>   <Carousel.Item>
        <img
          className="d-block w-100"
          src={car4}
          alt="Second slide"
        />
      </Carousel.Item>
         <Carousel.Item>
        <img
          className="d-block w-100"
          src={car5}
          alt="Second slide"
        />
      </Carousel.Item> 
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={car1}
          alt="Second slide"
        />
      </Carousel.Item>
     
    </Carousel>
  );
};

export default MyCarousel;

import React from "react";
import { Carousel } from "react-bootstrap";
import "./Home.css";
import * as Style from "../../UI/Home";
export default function HomeCarousel() {
  return (
    <Style.HomeContainer className="row">
      <Carousel className="home-carousel col-6" interval={30000}>
        <Carousel.Item>
          <Style.SliderImg
            alt="First slide"
            src="https://n11scdn.akamaized.net/a1/org/ev-yasam/hali/padisah-hali-modelleri-170x250-mostar-11853-060-cerceve-desen__0541656373403410.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Style.SliderImg
            alt="Third slide"
            src="https://www.seoportals.com/wp-content/uploads/2020/04/nar-hali-perde-narlidere.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Style.SliderImg
            alt="Second slide"
            src="https://n11scdn.akamaized.net/a1/org/ev-yasam/hali/padisah-hali-modelleri-170x250-mostar-11853-060-cerceve-desen__0541656373403410.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Style.SliderImg
            alt="no photos"
            src="https://n11scdn.akamaized.net/a1/org/ev-yasam/hali/padisah-hali-modelleri-170x250-mostar-11853-060-cerceve-desen__0541656373403410.jpg"
          />
        </Carousel.Item>
      </Carousel>
      <Carousel className="home-carousel col-6" interval={30000}>
        <Carousel.Item>
          <Style.SliderImg
            alt="no photos"
            src="https://lh3.googleusercontent.com/p/AF1QipPxvN8PD9lFEI6MYkEf7zuCQz3RqFUxQs4e4cDS=s1600-w400"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Style.SliderImg
            alt="no photos"
            src="https://www.seoportals.com/wp-content/uploads/2020/04/nar-hali-perde-narlidere.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Style.SliderImg
            alt="no photos"
            src="https://n11scdn.akamaized.net/a1/org/ev-yasam/hali/padisah-hali-modelleri-170x250-mostar-11853-060-cerceve-desen__0541656373403410.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Style.SliderImg
            alt="no photos"
            src="https://n11scdn.akamaized.net/a1/org/ev-yasam/hali/padisah-hali-modelleri-170x250-mostar-11853-060-cerceve-desen__0541656373403410.jpg"
          />
        </Carousel.Item>
      </Carousel>
    </Style.HomeContainer>
  );
}

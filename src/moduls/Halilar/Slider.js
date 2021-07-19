import React from "react";
import { Carousel } from "react-bootstrap";
import * as CardStyles from "../../UI/Card";

export default function Slider(props) {
  console.log(Carousel)
  const photos = props.photos;
  return (
    <Carousel interval={30000}>
      {photos.map((photos, index) => (
        <Carousel.Item key={index}>
          <CardStyles.ItemImg
              className="card-img-top"
              src={photos}
              alt="Card images cap"
            />
          {/* <img className="images mb-2" src={photos} alt="First slide" /> */}
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
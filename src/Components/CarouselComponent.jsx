import {Carousel} from "react-bootstrap";
import Carousel1 from "../assets/carousel-1.png";
import Carousel2 from "../assets/carousel-2.png";
import Carousel3 from "../assets/carousel-3.png";

import { LinkContainer } from "react-router-bootstrap";

export default function CarouselComponent() {

  const pointer = {
    cursor : "pointer"
  }
    return (
        <Carousel className="carousel">
        <Carousel.Item>
          <img 
          crossOrigin="anonymous"
          className="d-block w-100"
          src={Carousel1}
          style={{height:"300px",objectFit:"cover"}}/>
          <Carousel.Caption>
            <LinkContainer to="/product-details/1" style={pointer}>
              <h3>Best Seller in Laptops</h3>
            </LinkContainer>
            <p>Lenovo ThinkPad, HP Pavilion and many More...</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img 
            className="d-block w-100"
            src={Carousel2}
            style={{height:"300px",objectFit:"cover"}} />
          <Carousel.Caption>
          <LinkContainer to="/product-details/1" style={pointer}>
              <h3>Best Seller in Books</h3>
            </LinkContainer>
            <p>Red, white and ROyal Blue, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img 
            className="d-block w-100"
            src={Carousel3} 
            style={{height:"300px",objectFit:"cover"}}/>
          <Carousel.Caption>
          <LinkContainer to="/product-details/1" style={pointer}>
              <h3>Best Seller in Cameras</h3>
            </LinkContainer>
            <p>
              Neon Pixel 3300, Google blaze 4D sharp and many more....
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}
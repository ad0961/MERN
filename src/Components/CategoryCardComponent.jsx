import {Button, Card} from 'react-bootstrap';

import Image from "../assets/carousel-1.png";
import { LinkContainer } from 'react-router-bootstrap';

export default function CategoryCardComponent( {category, index} ) {
  return (
    <Card>
      <Card.Img
      crossOrigin='anonymous' variant="top" src={Image} style={{height:"200px", objectFit:"cover"}}/>
      <Card.Body>
        <Card.Title>{category}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <LinkContainer to="/product-list">
          <Button variant="primary">Explore Category</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
}
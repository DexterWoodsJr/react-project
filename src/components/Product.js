import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container, Row, Col
} from "reactstrap";

const Product = (props) => {
  return (
    <div className="product">
        <Card>
            <CardImg
            src="https://picsum.photos/50/?blur"
            alt="Card image cap"
            />
            <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </CardText>
            <Button className="button">Add to Cart</Button>
            </CardBody>
        </Card>
        </div>
  );
};

export default Product;

import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Rating from "./Rating";

function Product(props) {
  const { product } = props;

  return (
    <Card className="product">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <Card.Body>
        <Link className="product-link" to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>${product.price}</Card.Text>
        <Button>Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;

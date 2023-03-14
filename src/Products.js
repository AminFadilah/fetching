import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import "./Products.css";

const ProductsCard = () => {
  const urlProducts = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch(urlProducts);
    const dataProducts = await response.json();
    setProducts(dataProducts);
    console.log(dataProducts);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className="container">
        <h1>Products</h1>
        <div className="row">
          {products.map((product) => (
            <div className="col-3 mt-3">
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                desc={product.description}
                img={product.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function ProductCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.img} style={{ height: "18rem" }} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ height: "18rem" }}>{props.desc}</Card.Text>
        <Card.Text>{props.price}</Card.Text>
        <div className="row justify-content-end">
          <Button variant="primary">Buy</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductsCard;

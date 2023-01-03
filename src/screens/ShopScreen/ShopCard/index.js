import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "splide-nextjs/splide/dist/css/themes/splide-sea-green.min.css";
import { Button, Col, Row } from "react-bootstrap";
import { SplideSlide, Splide } from "@splidejs/react-splide";
import {
  shoppingCardActions,
  shoppingContext,
} from "../../../contexts/shoppingContext";

function ShopCard() {
  const [cardItems, setCardItems] = useState([]);
  useEffect(() => {
    axios.get("/api/shop").then((res) => {
      setCardItems(res.data.CardItems);
    });
  }, []);

  const {shoppingCard,dispatch} = useContext(shoppingContext);

  const handleNewProduct = (cards) => {
    dispatch({
      type: shoppingCardActions.add,
      payload: cards,
    });
  };
  return (
    <Container>
      <Row>
        {cardItems?.map((cards) => (
          <Col sm="12" md="6" lg="4" xl="3">
            <Card key={cards.id} style={{ marginTop: "5rem" }}>
              <Card.Img
                style={{ height: "15rem" }}
                variant="top"
                src={cards.image}
              />
              <Card.Body>
                <Card.Title>{cards.name}</Card.Title>
                <Card.Text>{cards.title}</Card.Text>
                <Button
                  onClick={() => handleNewProduct(cards)}
                  variant="primary"
                >
                  Add product
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default ShopCard;

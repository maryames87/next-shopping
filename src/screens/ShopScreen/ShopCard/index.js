import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "splide-nextjs/splide/dist/css/themes/splide-sea-green.min.css";
import { Button, Col, Row } from "react-bootstrap";
import { SplideSlide, Splide } from "@splidejs/react-splide";

function ShopCard() {
  const [cardItems, setCardItems] = useState([]);
  useEffect(() => {
    axios.get("/api/shop").then((res) => {
      setCardItems(res.data.CardItems);
    });
  }, []);

  return (
    <Container>
      <div>
      <Splide
        options={{
          perPage: 3,
          autoplay: "boolean",
          pause: false,
          rewind: true,
          breakpoints: {
            1200: {
              perPage: 4,
            },
            992: {
              perPage: 3,
            },
            640: {
              perPage: 2,
            },
          },
        }}
        aria-label="My Favorite Images"
      >
        <Row>
          {cardItems?.map((cards) => (
            <Col sm="12" md="6" lg="4" xl="3">
              <SplideSlide>
                <Card  key={cards.id} style={{ marginTop: "5rem" }}>
                  <Card.Img
                    style={{ height: "15rem" }}
                    variant="top"
                    src={cards.image}
                  />
                  <Card.Body>
                    <Card.Title>{cards.name}</Card.Title>
                    <Card.Text>{cards.title}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </SplideSlide>
            </Col>
          ))}
        </Row>
      </Splide>

      </div>
    </Container>
  );
}
export default ShopCard;

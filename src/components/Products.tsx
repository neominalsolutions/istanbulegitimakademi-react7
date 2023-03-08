import React, { useState } from "react";
import { Button, Card, CardGroup, Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import { useDispatch } from "react-redux";
import { addItem, FavoriteProduct } from "../store/slices/FavoriteSlice";
import { AppDispatch } from "../store/store";

type Props = {};

export default function Products({}: Props) {
  const dispatch = useDispatch<AppDispatch>();

  const [plist] = useState<FavoriteProduct[]>([
    {
      id: 1,
      name: "Ürün -1",
      content: "Elektirikli Süpürge",
      price: 100,
      quantity: 1,
    },
    {
      id: 2,
      name: "Ürün-2",
      content: "Traş Makinası",
      price: 200,
      quantity: 1,
    },
    {
      id: 3,
      name: "Ürün-3",
      content: "Ayakkabılık",
      price: 300,
      quantity: 1,
    },
  ]);

  const onAddFavorite = (p: FavoriteProduct) => {
    console.log("ürün", p);
    dispatch(addItem(p));
  };

  return (
    <Container>
      <Row>
        <h1>Ürünlerimiz</h1>
      </Row>
      <Row>
        <CardGroup>
          {plist.map((p: FavoriteProduct) => {
            return (
              <Card key={p.id}>
                <Card.Body>
                  <Card.Title> {p.name}</Card.Title>
                  <Card.Text>
                    {p.content} <br></br> Fiyat: {p.price}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button onClick={() => onAddFavorite(p)} variant="warning">
                    Favoriye Ekle
                  </Button>
                </Card.Footer>
              </Card>
            );
          })}
        </CardGroup>
      </Row>
      <Row>
        <h1>Favori Ürünler</h1>
      </Row>
    </Container>
  );
}

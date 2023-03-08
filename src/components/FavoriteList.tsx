import React from "react";
import { Badge, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { FavoriteProduct } from "../store/slices/FavoriteSlice";
import { RootState } from "../store/store";

type Props = {};

export default function FavoriteList({}: Props) {
  const favorites = useSelector(
    (state: RootState) => state.favoriteState.items
  );

  return (
    <div>
      <ListGroup as="ul" numbered>
        {favorites.map((item: FavoriteProduct) => {
          return (
            <ListGroup.Item
              key={item.id}
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  {item.name}
                  <br></br>
                  Fiyat: {item.price}
                </div>
              </div>
              <Badge bg="primary" pill>
                {item.quantity}
              </Badge>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
}

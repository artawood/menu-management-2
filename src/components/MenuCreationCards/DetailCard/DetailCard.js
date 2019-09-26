import React from "react";
import { Card } from "react-bootstrap";

const DetailCard = props => {
  const { data, object } = props;
  return (
    <Card className="mb-2">
      <Card.Header>
        <Card.Title>{object.name}</Card.Title>
      </Card.Header>
    </Card>
  );
};

export default DetailCard;

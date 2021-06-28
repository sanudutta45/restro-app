import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { faUserTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//scss
import CardStyle from "./Card.module.scss";

const Card = ({ data }) => {
  return (
    <Container
      fluid
      className={`${CardStyle.wrapper} d-flex`}
      as={Link}
      to={`/restaurant/${data && data._id}`}
    >
      <div className="p-1 d-flex justify-content-center align-items-center border border-secondary">
        <FontAwesomeIcon icon={faUserTag} size="4x" color="#000" />
      </div>
      <div className={`flex-grow-1 ${CardStyle.content}`}>
        <h2>{data && data.name}</h2>
        <p>Rating: {data && data.rating} stars</p>
        <p>{data && data.location}</p>
        <p>
          Timing: {data && data.openAt} am - {data && data.closeAt} pm
        </p>
      </div>
    </Container>
  );
};

export default Card;

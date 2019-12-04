import React from 'react';
import Flashcard from "./Flashcard";
import { Card, } from "semantic-ui-react";

const Cards = ({ cards, remove, toggle, show }) => (
  <Card.Group>
    {
      cards.map( card => (
        <Flashcard key={card.id} {...card} remove={remove} toggle={toggle} show={show}/>
      ))
    }
  </Card.Group>
);

export default Cards;
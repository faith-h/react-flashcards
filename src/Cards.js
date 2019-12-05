import React from 'react';
import Flashcard from "./Flashcard";
import { Card, } from "semantic-ui-react";

const Cards = ({ cards, remove, edit }) => (
  <Card.Group>
    {
      cards.map( card => (
        <Flashcard key={card.id} {...card} remove={remove} edit={edit}/>
      ))
    }
  </Card.Group>
);

export default Cards;
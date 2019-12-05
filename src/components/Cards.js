import React from 'react';
import Flashcard from "./Flashcard";
import { Card, } from "semantic-ui-react";

const Cards = ({ cards, remove, edit }) => (
  <Card.Group style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} >
    {
      cards.map( card => (
        <Flashcard key={card.id} {...card} remove={remove} edit={edit}/>
      ))
    }
  </Card.Group>
);

export default Cards;
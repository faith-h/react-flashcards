import React from 'react';
import {Card, Button} from 'semantic-ui-react';

const Flashcard = ({ id, question, answer, remove,}) => (
  <Card>
    <Card.Content>
      <Card.Header> {question} </Card.Header>
      <Card.Description>
      {answer}
      </Card.Description>
    </Card.Content>

     <Card.Content extra>
        <div className='ui two buttons'>
          <Button color="green" inverted> Show Answer </Button>
          
          <Button color="red" inverted onClick={() => remove(id)}> Delete Card </Button>
        </div>
      </Card.Content>
  </Card>
);

export default Flashcard;
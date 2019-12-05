import Cards from "./Cards";
import CardForm from "./CardForm";
import React from 'react';
import { Container, Segment, Header, Button, Icon } from 'semantic-ui-react';

class Oops extends React.Component {
  state = {
    cards: [
      { id: 1, question: "What are hamsters?", answer: "For seven year olds.", },
      { id: 2, question: "What do I have?", answer: "A hamster.", },
      { id: 3, question: "What am I?", answer: "A seven year old.", },
    ],
    showForm: false,
  };

  getId = () => {
    return Math.floor((1+Math.random()) * 10000);
  };


  addCard = ({ question, answer}) => {
    let card = {id: this.getId(), question, answer };
    this.setState({ cards: [card, ...this.state.cards], });
  };

  editCard = (cardData) => {
    const cards = this.state.cards.map( card => {
      if (card.id === cardData.id)
        return cardData;
        return card
    });
    this.setState({ cards, });
  };

  removeCard = (id) => {
    const cards = this.state.cards.filter( card => {
      if (card.id !== id)
        return card
      });
      this.setState({ cards: [...cards], });
    };

    toggleForm = () => this.setState({ showForm: !this.state.showForm, });


  render() {
    return (
      <Container>
        <div>
        <Header as="h1">Flashcards</Header>
        <br />
        <Cards cards={this.state.cards} remove={this.removeCard} toggle={this.toggleAnswer} edit={this.editCard}/>
        <br />
        <Header as="h3"> New Flashcard </Header>
        <Segment basic>
          <Button icon color="blue" onClick={this.toggleForm}>
            <Icon name={this.state.showForm ? 'chevron up' : 'chevron down' } />
          </Button>
          {this.state.showForm ? <CardForm addCard={this.addCard} /> : null }
        </Segment>
        </div>
      </Container>
    )
  };
};

export default Oops;
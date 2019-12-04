import React from 'react';
import Cards from "./Cards";
import CardForm from "./CardForm";
import { Container, Header, Button, Icon, Segment, } from 'semantic-ui-react';

class App extends React.Component {
  state = {
    cards: [
      { id: 1, question: "What is smoking?", answer: "Bad.", },
      { id: 2, question: "What are juuls?", answer: "Bad.", },
      { id: 3, question: "What will smoking do to you?", answer: "Kill you.", },
    ],
    showForm: true,
  };

  getId = () => {
    return Math.floor((1+Math.random()) * 10000);
  };


  addCard = ({ question, answer}) => {
    let card = {id: this.getId(), question, answer };
    this.setState({ cards: [card, ...this.state.cards], });
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
        <br />
        <Header as="h1"> React Flash Cards</Header>
        <Cards cards={this.state.cards} remove={this.removeCard} toggle={this.toggleAnswer}/>
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

export default App;

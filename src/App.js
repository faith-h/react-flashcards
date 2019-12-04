import React from 'react';
import Cards from "./Cards";
import CardForm from "./CardForm";
import { Container, Header, Button, Icon, Segment, } from 'semantic-ui-react';

class App extends React.Component {
  state = {
    cards: [
      { id: 1, question: "What is 2+2?", answer: "4", },
      { id: 2, question: "What is 4+4?", answer: "8", },
      { id: 3, question: "What is 3+3?", answer: "6", },
    ],
    showForm: true,
    showAnswer: false, 
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

    toggleShow = () => this.setState({ showAnswer: !this.state.showAnswer, });
  

  render() {
    return (
      <Container>
      <div>
        <br />
        <Header as="h1"> React Flash Cards</Header>
        <Cards cards={this.state.cards} show={this.state.showAnswer} remove={this.removeCard} toggle={this.toggleShow}/>
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

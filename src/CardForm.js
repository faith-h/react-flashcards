import React from 'react';
import { Form, } from "semantic-ui-react";

class CardForm extends React.Component {
  state = { question: "", answer: "", };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addCard(this.state);
    this.setState({ question: "", answer: "", });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
        <Form.Input
        fluid
        label="New Question"
        placeholder="Enter your question"
        name="question"
        value={this.state.question}
        onChange={this.handleChange}
        />
        <Form.Input
        fluid
        label="New Answer"
        placeholder="Enter your answer"
        name="answer"
        value={this.state.answer}
        onChange={this.handleChange}
        />
        <Form.Button color="blue" inverted > Submit </Form.Button>
        </Form.Group>
        </Form>
    );
  };
};

export default CardForm;
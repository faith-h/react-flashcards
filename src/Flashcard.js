import React from 'react';
import CardForm from "./CardForm"
import {Card, Button, Segment} from 'semantic-ui-react';

class Flashcard extends React.Component {
  state = { editing: false, showAnswer: false, };

  toggleEdit = () => this.setState({ editing: !this.state.editing, });

  toggleShow = () => this.setState({ showAnswer: !this.state.showAnswer, });

  render() {
    const { question, answer, remove, id} = this.props
    return (
      <Segment>
  <Card>
      { 
        this.state.editing ?
        <CardForm {...this.props } toggleEdit={this.toggleEdit}/>
        :
        <>
          <Card.Content header={question} />
          { 
            this.state.showAnswer ?
          <Card.Content description={answer} />
          : null
          }
        </>
      }
     <Card.Content extra>
        <div className='ui three buttons'>
          <Button color="green" inverted onClick={this.toggleShow}>
            Show Answer
          </Button>
          <Button color="blue" inverted onClick={this.toggleEdit}> 
            Edit
          </Button>
          <Button color="red" inverted onClick={() => remove(id)}>
            Delete 
          </Button>
        </div>
      </Card.Content>
  </Card>
  </Segment>
    )
  };
};

export default Flashcard;
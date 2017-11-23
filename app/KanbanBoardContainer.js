import React, { Component } from 'react';
import KanbanBoard from './KanbanBoard';

class KanbanBoardContainer extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      cards: []
    }
  }

  componentWillMount() {
    fetch('./data.json')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({ cards: responseData });
      })
      .catch((error) => {
        console.log('Error fetching and parsing data', error);
      });
  }

  addTask(cardId, taskName) {
    console.log('add');
  }

  deleteTask(cardId, taskId, taskIndex) {
    console.log('delete');
  }

  toggleTask(cardId, taskId, taskIndex) {
    console.log('toggle');
  }

  render() {
    return (
      <KanbanBoard
        cards={this.state.cards}
        taskCallbacks={{
          add: this.addTask.bind(this),
          delete: this.deleteTask.bind(this),
          toggle: this.toggleTask.bind(this),
        }}
      />
    )
  }

}

export default KanbanBoardContainer;
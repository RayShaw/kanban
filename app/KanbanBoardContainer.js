import React, { Component } from 'react';
import KanbanBoard from './KanbanBoard';
import update from 'immutability-helper';

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

        window.state = this.state;
      })
      .catch((error) => {
        console.log('Error fetching and parsing data', error);
      });
  }

  addTask(cardId, taskName) {
    // console.log('add');

    let prevState = this.state;

    let cardIndex = this.state.cards.findIndex(card => card.id === cardId);

    let newTask = { id: Date.now(), name: taskName, done: false }

    let nextState = update(this.state.cards, {
      [cardIndex]: {
        tasks: {
          $push: [newTask]
        }
      }
    });

    this.setState({ cards: nextState });



    // Call the API to toggle the task on the server

    // fetch(`API_URL.cards.${cardId}/tasks`, {
    //   method: 'post',
    //   headers: { 'Content-Type': 'application/json', Authorization: 'any-string-you-like' },
    //   body: JSON.stringify(newTask)
    // })
    //   .then((response) => {
    //     if (response.ok)
    //       return response.json();
    //     else
    //       throw new Error(`Server response wasn't OK`);

    //   })
    //   .then(responseData => {
    //     newTask.id = responseData.id
    //     this.setState({ cards: nextState });
    //   })
    //   .catch(error => {
    //     console.error('Fetch eror:', error);
    //     this.setState(prevState);
    //   })

  }

  deleteTask(cardId, taskId, taskIndex) {
    // console.log('delete');

    let prevState = this.state;

    let cardIndex = this.state.cards.findIndex(
      card => card.id === cardId
    );

    // console.log(this.state.cards[cardIndex].tasks[taskIndex]);
    let nextState = update(this.state.cards, {
      [cardIndex]: {
        tasks: { $splice: [[taskIndex, 1]] }
      }
    });

    // console.log(nextState);
    this.setState({ cards: nextState });


    // Call the API to remove the rask on the server
    // fetch(`API_URL.cards.${cardId}/tasks/${taskId}`, {
    //   method: 'delete',
    //   headers: { 'Content-Type': 'application/json', Authorization: 'any-string-you-like' }
    // })
    //   .then(response => {
    //     if (!response.ok)
    //       throw new Error(`Server response wasn't OK`);
    //   })
    //   .catch(error => {
    //     console.error('Fetch eror:', error);
    //     this.setState(prevState);
    //   });

  }

  toggleTask(cardId, taskId, taskIndex) {
    // console.log('toggle');

    let prevState = this.state;

    let cardIndex = this.state.cards.findIndex(card => card.id === cardId);
    let newDoneValue;
    let nextState = update(this.state.cards, {
      [cardIndex]: {
        tasks: {
          [taskIndex]: {
            done: {
              $apply: (done) => {
                newDoneValue = !done;
                return newDoneValue;
              }
            }
          }
        }
      }
    });

    this.setState({ cards: nextState });

    // Call the API to toggle the task on the server
    // fetch(`API_URL.cards.${cardId}/tasks/${taskId}`, {
    //   method: 'put',
    //   headers: { 'Content-Type': 'application/json', Authorization: 'any-string-you-like' },
    //   body: JSON.stringify({ done: newDoneValue })
    // })
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error(`Server response wasn't OK`);
    //     }
    //   })
    //   .catch(error => {
    //     console.error('Fetch eror:', error);
    //     this.setState(prevState);
    //   });
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
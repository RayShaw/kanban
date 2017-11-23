import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class CheckList extends Component {
  constructor() {
    super(...arguments);
  }

  checkInputKeyPress(event) {
    if (event.key === 'Enter') {
      this.props.taskCallbacks.add(this.props.cardId, event.target.value);
      event.target.value = '';
    }

  }

  render() {
    let tasks = this.props.tasks.map((task, index) => {
      return (
        <li className="checklist_task" key={task.id}>
          <input type="checkbox" defaultChecked={task.done}
            onClick={
              this.props.taskCallbacks.toggle.bind(
                this,
                this.props.cardId,
                task.id,
                index
              )
            }
          />
          {task.name} {' '}
          <a href="#" className="checklist_task--remove"
            onClick={
              this.props.taskCallbacks.delete.bind(
                this,
                this.props.cardId,
                task.id,
                index
              )
            }
          />
        </li>
      )
    })
    return (
      <div>
        <ul>{tasks}</ul>
        <input type="text" className="checklist--add-task"
          placeholder="Type then hit Enter to add a task"
          onKeyPress={this.checkInputKeyPress.bind(this)}
        />
      </div>
    )
  }
};

CheckList.propTypes = {
  cardId: PropTypes.number,
  tasks: PropTypes.arrayOf(PropTypes.object),
  taskCallbacks: PropTypes.object
};

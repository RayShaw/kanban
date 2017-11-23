import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class CheckList extends Component {
  constructor() {
    super();
  }
  render() {
    let tasks = this.props.tasks.map((task, index) => {
      return (
        <li className="checklist_task" key={"task" + index}>
          <input type="checkbox" defaultChecked={task.done} />
          {task.name}
          <a href="#" className="checklist_task--remove" />
        </li>
      )
    })
    return (
      <div>
        <ul>{tasks}</ul>
        <input type="text" className="checklist--add-task" 
        placeholder="Type then hit Enter to add a task"/>
      </div>
    )
  }
};

CheckList.propTypes = {
  cardId: PropTypes.number,
  tasks: PropTypes.arrayOf(PropTypes.object)
};

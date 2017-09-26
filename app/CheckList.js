import React, { Component } from "react";

export default class CheckList extends Component {
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
            </div>
        )
    }
}
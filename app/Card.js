import React, { Component } from "react";
import CheckList from "./CheckList.js";

export default class Card extends Component {
    render() {
        return (
            <div className="card">
                <div className="card_title">
                    <div className="card_details">
                        {this.props.description}
                        <CheckList cardId={this.props.id} tasks={this.props.tasks} />
                    </div>
                </div>
            </div>
        )
    }
}
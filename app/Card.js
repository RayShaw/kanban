import React, { Component } from "react";
import CheckList from "./CheckList.js";
import marked from "marked";

export default class Card extends Component {
    constructor() {
        super();
        this.state = {
            showDetail: false
        };
    }

    toggleDetails() {
        this.setState({ showDetail: !this.state.showDetail })
    }

    render() {
        let cardDetails;
        if (this.state.showDetail) {
            cardDetails = (
                <div className="card_details">
                    <span dangerouslySetInnerHTML={{ __html: marked(this.props.description) }} />
                    <CheckList cardId={this.props.id} tasks={this.props.tasks} />
                </div>
            )
        }

        let cardTitleSty = this.state.showDetail ? "card_title card_title--is-open" : "card_title";

        let sideColor = {
            position: "absolute",
            zIndex: -1,
            top: 0,
            bottom: 0,
            left: 0,
            width: 7,
            backgroundColor: this.props.color
        }

        return (
            <div className="card">
                <div className="sideColor" style={sideColor}></div>
                <div className={cardTitleSty} onClick={this.toggleDetails.bind(this)}>
                    {this.props.title}
                </div>
                {cardDetails}
            </div>
        )
    }
}
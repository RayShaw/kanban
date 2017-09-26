import React, { Component } from "react";
import Card from "./Card.js";

export default class List extends Component {
    render() {
        var cards = this.props.cards.map((card, index) => {
            return <Card
                id={card.id}
                title={card.title}
                description={card.description}
                color={card.color}
                tasks={card.tasks}
                key={"card" + index}
            />
        })
        return (
            <div className="list">
                <h1>{this.props.title}</h1>
                {cards}
            </div>
        )
    }
}
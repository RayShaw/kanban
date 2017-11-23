import React, { Component } from "react";
import Card from "./Card.js";
import PropTypes from 'prop-types';

export default class List extends Component {
  constructor() {
    super();
  }
  render() {
    var cards = this.props.cards.map((card, index) => {
      return <Card
        id={card.id}
        title={card.title}
        description={card.description}
        color={card.color}
        tasks={card.tasks}
        key={"card" + index}
        taskCallbacks={this.props.taskCallbacks}
      />
    })
    return (
      <div className="list">
        <h1>{this.props.title}</h1>
        {cards}
      </div>
    )
  }
};

List.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object),
  taskCallbacks: PropTypes.object
};
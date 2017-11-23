import React, { Component } from "react";
import CheckList from "./CheckList.js";
import marked from "marked";
import PropTypes from 'prop-types';

export default class Card extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      showDetail: true
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
          <CheckList cardId={this.props.id} tasks={this.props.tasks} taskCallbacks={this.props.taskCallbacks} />
        </div>
      )
    }

    let cardTitleSty = this.state.showDetail ? "card_title card_title--is-open" : "card_title";

    let sideColor = {
      // position: "absolute",
      // zIndex: -1,
      // top: 0,
      // bottom: 0,
      // left: 0,
      // width: 7,
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
};

let titlePropType = (props, propName, componentName) => {
  if (props[propName]) {
    let value = props[propName];
    if (typeof value !== 'string' || value.length > 80) {
      return new Error(
        `${propName} in ${componentName} is longer than 80 characters.`
      )
    }
  }
}

Card.propTypes = {
  id: PropTypes.number,
  // title: PropTypes.string,
  title: titlePropType,
  description: PropTypes.string,
  color: PropTypes.string,
  tasks: PropTypes.arrayOf(PropTypes.object),
  taskCallbacks: PropTypes.object
};
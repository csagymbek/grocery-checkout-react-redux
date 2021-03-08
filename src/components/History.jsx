import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";

class History extends Component {
  render() {
    return (
      <div id="history-controls">
        <button onClick={this.props.undo}>undo</button>
        <button onClick={this.props.redo}>redo</button>
      </div>
    );
  }
}

const mapDispatch = (dispatch) => ({
  undo: () => dispatch({ type: "UNDO" }),
  redo: () => dispatch({ type: "REDO" }),
});

export default connect(null, mapDispatch)(History);

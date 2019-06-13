import React, { Component } from "react";
import "./style.css";
import { connect } from "react-redux";
import { increment } from "../ac";
import { decrement } from "../ac";

class Counter extends Component {

  render() {
    const { number, handleIncrement, handleDecrement } = this.props;
    return (
      <div container__fluid>
        <h1> {number} </h1>
        <div className="container">
          <button className="inc" onClick={handleIncrement}> 1 </button>
          <button className="dec" onClick={handleDecrement}> -1 </button>
      </div>
      </div>
    );
  }
}

const mapStateToProps = storeState => ({
  number: storeState.counter
});

const mapDispatchToProps = {
  handleIncrement: increment,
  handleDecrement: decrement
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

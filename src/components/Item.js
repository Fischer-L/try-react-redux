import React, { Component } from 'react';
import { connect } from 'react-redux'

class Item extends Component {

  constructor(props) {
    super(props);
    this._stateCount = 0;
    console.log("Item - constructor - props =", props);
    console.log("Item - constructor - this.props =", this.props);
    console.log("Item - constructor - this.state =", this.state);
    console.log("");
  }

  componentWillReceiveProps(nextProps) {
    console.log("Item - componentWillReceiveProps - this.props =", this.props);
    console.log("Item - componentWillReceiveProps - nextProps =", nextProps);
    console.log("Item - componentWillReceiveProps - this.state =", this.state);
    // console.log("Item - componentWillReceiveProps - this.setState");
    // this.setState({
    //   text: nextProps.text + " " + (this._stateCount++)
    // });
    console.log("");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Item - shouldComponentUpdate - this.props =", this.props);
    console.log("Item - shouldComponentUpdate - nextProps =", nextProps);
    console.log("Item - shouldComponentUpdate - this.state =", this.state);
    console.log("Item - shouldComponentUpdate - nextState =", nextState);
    console.log("");
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("Item - componentWillUpdate - this.props =", this.props);
    console.log("Item - componentWillUpdate - nextProps =", nextProps);
    console.log("Item - componentWillUpdate - this.state =", this.state);
    console.log("Item - componentWillUpdate - nextState =", nextState);
    console.log("");
  }

  onClick() {
    console.log("Item - onClick");
    console.log("Item - onClick - this.props =", this.props);
    console.log("");
  }

  render() {
    console.log("Item - render - this.props =", this.props);
    console.log("Item - render - this.state =", this.state);
    console.log("");
    
    return (
      <li className="Item" onClick={ () => this.onClick() } >
        {this.props.text}
      </li>
    );
  }
}

export default Item;

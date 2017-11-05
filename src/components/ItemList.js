import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as actions from "../actions"
import Item from "./Item";

class ItemList extends Component {

  constructor(props) {
    super(props);
    this._stateCount = 0;
    console.log("ItemList - constructor - props =", props);
    console.log("ItemList - constructor - this.props =", this.props);
    console.log("ItemList - constructor - this.state =", this.state);
    console.log("");
  }

  componentWillReceiveProps(nextProps) {
    console.log("ItemList - componentWillReceiveProps - this.props =", this.props);
    console.log("ItemList - componentWillReceiveProps - nextProps =", nextProps);
    console.log("ItemList - componentWillReceiveProps - this.state =", this.state);
    // console.log("ItemList - componentWillReceiveProps - this.setState");
    // this.setState({
    //   text: nextProps.text + " " + (this._stateCount++)
    // });
    console.log("");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("ItemList - shouldComponentUpdate - this.props =", this.props);
    console.log("ItemList - shouldComponentUpdate - nextProps =", nextProps);
    console.log("ItemList - shouldComponentUpdate - this.state =", this.state);
    console.log("ItemList - shouldComponentUpdate - nextState =", nextState);
    console.log("");
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("ItemList - componentWillUpdate - this.props =", this.props);
    console.log("ItemList - componentWillUpdate - nextProps =", nextProps);
    console.log("ItemList - componentWillUpdate - this.state =", this.state);
    console.log("ItemList - componentWillUpdate - nextState =", nextState);
    console.log("");
  }

  onClick() {
    console.log("ItemList - onClick");
    console.log("ItemList - onClick - this.props =", this.props);
    console.log("");
    this.props.updateText("TEXT UPDATED");
  }

  render() {
    console.log("ItemList - render - this.props =", this.props);
    console.log("ItemList - render - this.state =", this.state);
    if (this.props.updateText) {
      console.log("ItemList - render - updateText");
    }
    console.log("");
    
    window._item = <Item text={this.props.text} />;

    return (
      <ul className="ItemList" onClick={ () => this.onClick() } >
        { window._item }
      </ul>
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log("ItemList - mapStateToProps - state =", state);
  console.log("ItemList - mapStateToProps - ownProps =", ownProps);
  console.log("");
  return {
    text: state.text
  }
};

function mapDispatchToProps(dispatch) {
  let bound = bindActionCreators(actions, dispatch);
  console.log("ItemList - mapDispatchToProps - bound =", bound);
  console.log("");
  return bound;
}

// export default ItemList;
export default connect(mapStateToProps, mapDispatchToProps)(ItemList);

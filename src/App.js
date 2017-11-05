import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import ItemList from "./components/ItemList";
import { bindActionCreators } from "redux";
import * as actions from "./actions"

class App extends Component {
  _stateCount: 0

  constructor(props) {
    super(props);
    console.log("App - constructor - props =", props);
    console.log("App - constructor - this.props =", this.props);
    console.log("App - constructor - this.state =", this.state);
    console.log("");
  }

  componentWillReceiveProps(nextProps) {
    console.log("App - componentWillReceiveProps - this.props =", this.props);
    console.log("App - componentWillReceiveProps - nextProps =", nextProps);
    console.log("App - componentWillReceiveProps - this.state =", this.state);
    console.log("");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("App - shouldComponentUpdate - this.props =", this.props);
    console.log("App - shouldComponentUpdate - nextProps =", nextProps);
    console.log("App - shouldComponentUpdate - this.state =", this.state);
    console.log("App - shouldComponentUpdate - nextState =", nextState);
    console.log("");
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("App - componentWillUpdate - this.props =", this.props);
    console.log("App - componentWillUpdate - nextProps =", nextProps);
    console.log("App - componentWillUpdate - this.state =", this.state);
    console.log("App - componentWillUpdate - nextState =", nextState);
    console.log("");
  }

  onClick() {
    // return;
    console.log("App - onClick");
    console.log("App - onClick - this.props =", this.props);
    this.setState({
      text: this.props.text + " " + this._stateCount++
    });
    console.log("");
  }

  render() {
    console.log("App - render - this.props =", this.props);
    console.log("App - render - this.state =", this.state);
    console.log("");
    return (
      <div className="App" >
        <ItemList name="ItemList" text="overridden text" />
        <img src={logo} className="App-logo" alt="logo" onClick={ () => this.onClick() } />
      </div>
    );
  }
}


function mapStateToProps(state) {
  console.log("App - mapStateToProps - state =", state);
  console.log("");
  return {
    text: state.text
  }
};

function mapDispatchToProps(dispatch) {
  let bound = bindActionCreators(actions, dispatch);
  console.log("App - mapDispatchToProps - bound =", bound);
  console.log("");
  return bound;
}

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);

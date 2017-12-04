import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ReactSwap from 'react-swap';
import { Grid, Navbar, Nav, NavItem, Jumbotron, Button, Col } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

//consts
const Swap = ReactSwap;
const Resume = props => <div className="resume" {...props} />;
const Bio = props => <div className="bio" {...props} />;

class MyResume extends Component {
  render() {
    return(
      <p>My Resume</p>
    );
  }
}

class MyBio extends Component {
  render() {
    return(
      <p>My Bio</p>
    );
  }
}

class App extends Component {
  state = {opened: false};
  onClick = () => {
    this.setState({opened: !this.state.opened});
  };

  render() {
    return (
      <div className="App">
       <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">React-Bootstrap</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#" onClick={this.onClick}>{this.state.opened ? `Bio` : `Resume`}</NavItem>
        </Nav>
      </Navbar>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Ameden.me in React</h1>
        </header>
        <ReactSwap isSwapped={this.state.opened}>
          <Bio className="ame-margin-default"><MyBio /></Bio>
          <Resume className="ame-margin-default"><MyResume /></Resume>
        </ReactSwap>
      </div>
    );
  }
}
export default App;
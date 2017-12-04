import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactSwap from 'react-swap';
import {  Navbar, Nav, NavItem, Button, Modal, OverlayTrigger, Image } from 'react-bootstrap';
import logo from './media/logo.svg';
import headshot from './media/headshot.jpg';
import './App.css';
var createReactClass = require('create-react-class');

const Swap = ReactSwap;
const Resume = props => <div className="resume" {...props} />;
const Bio = props => <div className="bio" {...props} />;


const Header = createReactClass({

  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render() {

    return (
      <header className="position-top">
        <a className="about-trigger align-right" onClick={this.open}>
          <Image src={headshot} circle width="50"/>
        </a>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Body>
          <a onClick={this.close}>X</a>
            <div className="modal-header uk-text-center">
              <Image src={headshot} circle width="100"/>
              <h2 className="uk-margin-medium-top">Hi, Im Ryley.</h2>
            </div>
          </Modal.Body>
        </Modal>
      </header>
    );
  },
});

const MyResume = createReactClass({
  render() {
    return(
      <p>My Resume</p>
    );
  }
});

const MyBio = createReactClass({
  render() {
    return(
      <p>My Bio</p>
    );
  }
});


class App extends Component {

  state = {opened: false};
  onClick = () => {
    this.setState({opened: !this.state.opened});
    document.body.classList.toggle('resume', this.props.isDark)
  };

  render() {
    return (
      <div className="App">
      <Header />
        <Button onClick={this.onClick}>{this.state.opened ? `Ameden.me` : `Resume`}</Button>
        <ReactSwap isSwapped={this.state.opened}>
          <Bio className="ame-margin-default"><MyBio /></Bio>
          <Resume className="ame-margin-default"><MyResume /></Resume>
        </ReactSwap>
      </div>

    );
  }
}

export default App;
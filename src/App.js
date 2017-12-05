import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ReactSwap from 'react-swap';
import {  Navbar, Nav, NavItem, Button, Modal, OverlayTrigger, Image } from 'react-bootstrap';
import logo from './media/logo.svg';
import headshot from './media/headshot.jpg';
import './App.css';
var createReactClass = require('create-react-class');

const Resume = (props) => {
  const { showResume } = props;
 
  return (
    <div className="container">
     <Button onClick={props.handleToggle}>Toggle</Button>
      {showResume && <div><MyResume /></div>}
    </div>
  );
};

Resume.propTypes = {
  showResume: PropTypes.bool.isRequired
};

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };    
  }
  
  close() {
    this.setState({ showModal: false });
  };

  open() {
    this.setState({ showModal: true });
  };

  render() {

    return (
      <header className="position-top">
        <a className="about-trigger align-right" onClick={this.open.bind(this)}>
          <Image src={headshot} circle width="50"/>
        </a>
        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Body>
          <a onClick={this.close.bind(this)}>X</a>
            <div className="modal-header uk-text-center">
              <Image src={headshot} circle width="100"/>
              <h2 className="uk-margin-medium-top">Hi, Im Ryley.</h2>
            </div>
          </Modal.Body>

        </Modal>
      </header>
    );
  }
}

class MyResume extends React.Component{
  render() {
    return(
      <p>My Resume</p>
    );
  }
}

class App extends React.Component {
  
  state = {showResume: false}
  
  handleToggle = () => {
    this.setState({showResume: !this.state.showResume});
    document.body.classList.toggle('resume', this.props.isDark)
   };

  render() {
    return (
      <div className="App">
        <Header />
        <Resume showResume={this.state.showResume} handleToggle={this.handleToggle}/>
      </div>

    );
  }
}

export default App;
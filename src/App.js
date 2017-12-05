//Deps
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ReactSwap from 'react-swap';
import { Button, Modal, OverlayTrigger, Image, Jumbotron } from 'react-bootstrap';
//Custom Deps
import ResumeImp from './components/resume';
import logo from './media/logo.svg';
import headshot from './media/headshot.jpg';
import './App.css';

class Main extends React.Component {

  constructor(props) {
    super();
    this.state = {
      showModal: false,
      showLoader: false
    };    
  }
  
  close() {
    this.setState({ showModal: false });
  };

  open() {
    this.setState({showLoader:true})
    setTimeout(() => {
      this.setState({ showModal: true });
      this.setState({ showLoader: false });
    }, 1000);
    
    
    
  };

  render() {

    return (
      <div>
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <Button className="about-trigger" onClick={this.open.bind(this)}>Modal</Button> 
        </Jumbotron>
        <Modal animation={true} backdropClassName="modalBackdropOpen" show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Body>
          <a onClick={this.close.bind(this)}>X</a>
            <div className="modal-header uk-text-center">
            </div>
            <ResumeImp />
          </Modal.Body>
        </Modal>
        {this.state.showLoader ? <div> <img src={logo} className="App-logo" alt="logo" /></div> : null}
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Main />
      </div>

    );
  }
}

export default App;
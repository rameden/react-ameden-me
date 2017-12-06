//Deps
import React, { Component } from 'react';
//import PropTypes from 'prop-types';
//import ReactDOM from 'react-dom';
import { Button, Modal, OverlayTrigger, Image, Grid, Col, Row } from 'react-bootstrap';
import Loading from 'react-loading-bar'
import 'react-loading-bar/dist/index.css'

//Custom Deps
import ResumeImp from './components/resume';
//import logo from './media/logo.svg';
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
        <div className="mainAppWrapper">
          <div className="mainAppBody">
            <div className="mainAppHeader">
              <Image src={headshot} circle width="100" />
              <h2>Hello, I'm Ryley</h2>
              <a className="">Github </a>
              <a className=""> LinkedIn </a>
              <a className=""> Facebook</a>
            </div>
          <p>I modernize, customize and other ‘ize-y things at Dyn! My background involves pushing the limits of of what we can build on the backend and how we can experience it on the frontend. My passion is finding the best way to complete a project, optimization and teaching those around me.</p>
          <Grid bsClass="gridWrapper">
            <Row className="show-grid">
              <Col xs={12} md={6}>
              <h4>Working Together?</h4>
              <p>My motto is: “Helping everyday business with development and marketing” Sound good? Contact me.</p>
              </Col>
              <Col xs={12} md={6}>
              <h4>How'd you build this site?!</h4>
              <p>Because I love open-source it's available for you to see. Find a bug? Report it! View source.</p>
              </Col>
            </Row>
            </Grid> 
          <Button className="about-trigger" onClick={this.open.bind(this)}>Résumé</Button> 
          </div>
        </div>
        <Modal animation={true} show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Body>
          <a onClick={this.close.bind(this)}>X</a>
            <div className="modal-header uk-text-center">
            </div>
            <ResumeImp />
          </Modal.Body>
        </Modal>
        <Loading
          show={this.state.showLoader}
          color="#03adf7"
          showSpinner={false}
        />
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
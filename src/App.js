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

class Social extends React.Component{
  render(){
    return(
      <div>
      <svg className="hidden" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
      <symbol viewBox="0 0 15 16" id="github">
          <path d="M5.714 10.857q0 .357-.112.732t-.384.679-.647.304-.647-.304-.384-.679-.112-.732.112-.732.384-.679.647-.304.647.304.384.679.112.732zm5.715 0q0 .357-.112.732t-.384.679-.647.304-.647-.304-.384-.679-.112-.732.112-.732.384-.679.647-.304.647.304.384.679.112.732zm1.428 0q0-1.071-.616-1.821t-1.67-.75q-.366 0-1.741.188-.634.098-1.402.098t-1.402-.098q-1.357-.188-1.741-.188-1.054 0-1.67.75t-.616 1.821q0 .786.286 1.371t.723.92 1.089.536 1.25.263 1.33.063h1.5q.732 0 1.33-.063t1.25-.263 1.089-.536.723-.92.286-1.371zm2-1.571q0 1.848-.545 2.955-.339.688-.942 1.188t-1.259.768-1.518.424-1.531.196-1.491.04q-.696 0-1.268-.027t-1.317-.112-1.362-.268-1.223-.46-1.08-.723-.768-1.027q-.554-1.098-.554-2.955 0-2.116 1.214-3.536-.241-.732-.241-1.518 0-1.036.455-1.946.964 0 1.696.353T4.81 3.741q1.313-.313 2.759-.313 1.321 0 2.5.286.938-.732 1.67-1.08t1.688-.348q.455.911.455 1.946 0 .777-.241 1.5 1.214 1.429 1.214 3.554z"></path>
      </symbol>
      <symbol viewBox="0 0 16 16" id="linkedin">
        <path d="M6 6h2.767v1.418h.04C9.192 6.727 10.134 6 11.539 6 14.46 6 15 7.818 15 10.183V15h-2.885v-4.27c0-1.018-.021-2.329-1.5-2.329-1.502 0-1.732 1.109-1.732 2.255V15H6V6zM1 6h3v9H1V6zM4 3.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 4 3.5z"></path>
      </symbol>
      <symbol viewBox="0 0 16 16" id="facebook">
        <path d="M9.5 3H12V0H9.5C7.57 0 6 1.57 6 3.5V5H4v3h2v8h3V8h2.5l.5-3H9V3.5c0-.271.229-.5.5-.5z"></path>
      </symbol>
      </svg>
        <div className="socail-modal flex flex-center">
          <div>
          <a className="social-github" href="https://github.com/rameden">
            <svg className="icon">
              <use xlinkHref="#github"></use>
            </svg>
          </a>
          </div>
          <div>
          <a className="social-linkedin" href="https://github.com/rameden">
            <svg className="icon">
              <use xlinkHref="#linkedin"></use>
            </svg>
          </a>
          </div>
          <div>
          <a className="social-facebook" href="https://github.com/rameden">
            <svg className="icon">
              <use xlinkHref="#facebook"></use>
            </svg>
          </a>
          </div>
        </div>
      </div>
    );
  }
}

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
              <Social />
            </div>
          <p className="margin-medium-bottom">I modernize, customize and other ‘ize-y things at Dyn! My background involves pushing the limits of of what we can build on the backend and how we can experience it on the frontend. My passion is finding the best way to complete a project, optimization and teaching those around me.</p>
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
          <a className="modalClose"onClick={this.close.bind(this)}>✖</a>
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
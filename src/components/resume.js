//Deps
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Grid, Col, Row } from 'react-bootstrap';
import { ProgressBar } from 'react-bootstrap';
import headshot from '../media/headshot.jpg';

class Exp extends React.Component{
    render() {
        return (
            <div className="single-exp">
                <h4 className="margin-bottom-remove">{this.props.company}</h4>
                <p className="text-muted margin-remove">{this.props.empTitle}</p>
                <div className="badge badge-success">{this.props.timeFrame}</div>
                <p className="margin-small-top">{this.props.desc}</p>
            </div>
        )    
    }
}
Exp.propTypes = {
    company: PropTypes.string,
    empTitle: PropTypes.string,
    desc: PropTypes.string,
    timeFrame: PropTypes.string
};
  
class Skill extends React.Component{
    render() {
        return (
            <div className="skill">
                <p>{this.props.skill}</p>
                <ProgressBar >
                    <ProgressBar className="customProgress" now={this.props.prof} key={1}/>
                    <ProgressBar  active now={100 - this.props.prof} key={2} />
                </ProgressBar>
                <hr></hr>
            </div>
        )    
    }
}
Exp.propTypes = {
    skill: PropTypes.string,
    prof: PropTypes.number,
};

class Project extends React.Component{
    render(){
        return (
            <div className="single-project">
            <h4 className="margin-bottom-remove">{this.props.projectTitle}</h4>
            <p className="text-muted margin-remove">{this.props.projectURL}</p>
            <div className="badge badge-info">{this.props.projectDateComp}</div>
            <p className="margin-small-top">{this.props.projectDesc}</p>
        </div>
        )    
    }
}
Exp.propTypes = {
    projectTitle: PropTypes.string,
    projectURL: PropTypes.string,
    projectDesc: PropTypes.string,
    projectDateComp: PropTypes.string,
};

class Resume extends Component{
    render(){
        
        return (
            <div>
                <div className="modal-header uk-text-center">
                    <Image className="float-left margin-right" src={headshot} width="100" circle />
                    <div className="resume-intro-left">
                        <h1 className="margin-remove">Ryley Ameden</h1>
                        <div className="intro-sub">
                        <span className="h2 text-muted margin-right">UI/UX Developer</span>
                    </div>
                    </div>
                    <div className="resume-intro-right">
                        <div><strong>P:</strong> <a className="link-muted" href="tel:6039371029">603.937.1029</a></div>
                        <div><strong>@:</strong> <a className="link-muted" href="mailto:ryley@ameden.me">ryley@ameden.me</a></div>
                    </div>
                </div>
                <div className="bio">
                <p>I am a UI/UX developer living in Wilton, NH. My background involves pushing the 
                    limits of of what we can build on the backend and how we can experience it on 
                    the frontend. My passions are perfecting the development process and educating 
                    those around me.</p>
                <p>I take pride in being quick to learn and master new technology; being equally successful 
                    in both team and self-directed settings; and proficient in a range of languages, 
                    computer systems, and tools.</p>
                   </div> 
                    <Grid>
                        <Row className="show-grid">
                            <Col xs={12} md={6}>
                            <h2 className="margin-top">EXPERIENCE</h2> 
                            <hr />
                                <Exp 
                                    company="Dyn + Oracle" 
                                    empTitle="UI/UX Developer"
                                    timeFrame="May 2016 - Present"
                                    desc="Working with a small talented team at Dyn I am in charge of development efforts for anything related to our production site. Modernizing our framework and development process has been the largest task I have tackled. Implementing git, gulp, less was just the start."
                                />
                                <Exp 
                                    company = "First Tracks Marketing" 
                                    empTitle = "Front End Web Developer"
                                    timeFrame = "May 2014 - May 2016"
                                    desc = "Hired right out of college I was tasked with supporting a wide range of Wordpress driven websites. FTM, realize where I was most effective, quickly moved me to Junior Developer where I was tasked with building high quality, optimized, custom Websites. Leveraging my knowledge in Javascript, PHP and HTML I helped build over 20+ websites."
                                />
                                <Exp 
                                    company = "GigaOM Inc." 
                                    empTitle = "Data Conversion, Q/A Analyst,"
                                    timeFrame = "May 2012 - May 2014"
                                    desc = "Working closely with the GigaOM engineering team I was in charge of testing and debugging their new Wordpress multisite and suggesting refinements to ensure it’s quality and success. A/B testing and personalization campaigns helped push GigaOM to the front of IOT news."
                                />
                            </Col>
                            <Col xs={12} md={6}>
                            <h2 className="margin-top">PROJECTS</h2> 
                            <hr />
                                <Project
                                    projectTitle = "Dyn.com"
                                    projectURL = "Dyn.com"
                                    projectDesc = "Description"
                                    projectDateComp = "January 2017"
                                />
                                <Project
                                    projectTitle = "AmedenLaw"
                                    projectURL = "amedenlaw.com"
                                    projectDesc = "My father was looking to build an online presence for his law firm in hopes of increase his connectivity to his clients and to make it easier for new clients to reach out to him. Working with him we came up with a simple and clean solution in the form of amedenlaw.com"
                                    projectDateComp = "January 2017"
                                />
                                <Project
                                    projectTitle = "HyoSilver"
                                    projectURL = "HyoSilver.com"
                                    projectDesc = ""
                                    projectDateComp = "January 2016"
                                />
                                <Project
                                    projectTitle = "First Tracks Marketing"
                                    projectURL = "firsttracksmarketing.com"
                                    projectDesc = "While working at First Tracks I was tasked with updating our current website. Starting at the ground level with wireframing I took the site from paper to production. The site included a flat modern design with lots of features making it easy for our customers to reach us."
                                    projectDateComp = "April 2016"
                                />
                            </Col>
                        </Row>
                    </Grid>
            
                
                <h2 className="margin-top">SKILLS</h2>  
                    <Grid>
                        <Row className="show-grid">
                            <Col xs={12} md={6}>
                            <h5 className="text-muted">LANGUAGES</h5>
                                <Skill
                                    skill = "HTML5"
                                    prof = {100}
                                />
                                <Skill
                                    skill = "CSS (LESS)"
                                    prof = {100}
                                />
                                <Skill
                                    skill = "PHP"
                                    prof = {90}
                                />
                                <Skill
                                    skill = "REACT"
                                    prof = {75}
                                />
                                <Skill
                                    skill = "REDUX"
                                    prof = {75}
                                />
                                <Skill
                                    skill = "JQUERY"
                                    prof = {75}
                                />
                                <Skill
                                    skill = "TYPESCRIPT"
                                    prof = {70}
                                />
                            </Col>
                            <Col xs={6} md={6}>
                            <h5 className="text-muted">BUILD/TECH</h5>
                            <Skill
                                    skill = "WORDPRESS"
                                    prof = {100}
                            />
                            <Skill
                                    skill = "GULP"
                                    prof = {75}
                            />
                            <Skill
                                    skill = "REST API"
                                    prof = {75}
                            />
                            <Skill
                                    skill = "DOCKER"
                                    prof = {70}
                            />
                            </Col>
                        </Row>
            </Grid>
            </div>
        )
    }
}

export default Resume;
//Deps
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ProgressBar } from 'react-bootstrap';

const Exp = (props) => {
    return (
        <div>
            <p>{props.company}</p>
            <p>{props.empTitle}</p>
            <p>{props.desc}</p>
            <p>{props.timeFrame}</p>
            <hr></hr>
        </div>
        )    
}

Exp.propTypes = {
    company: PropTypes.string,
    empTitle: PropTypes.string,
    desc: PropTypes.string,
    timeFrame: PropTypes.string
};

  
const Skill = (props) => {
    return (
        <div>
            <p>{props.skill}</p>
            <ProgressBar >
                <ProgressBar  now={props.prof} key={1}/>
                <ProgressBar  striped bsStyle="info" now={100 - props.prof} key={2} />
            </ProgressBar>
            <hr></hr>
        </div>
        )    
}

Exp.propTypes = {
    skill: PropTypes.string,
    prof: PropTypes.number,
};

const Project = (props) => {
    return (
        <div>
            <p>{props.projectTitle}</p>
            <p>{props.projectURL}</p>
            <p>{props.projectDesc}</p>
            <p>{props.projectDateComp}</p>
            <hr></hr>
        </div>
        )    
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
                <Exp 
                    company="Dyn + Oracle" 
                    empTitle="UI/UX Developer"
                    timeFrame="May 2016 - Present"
                    desc="Working with a small talented team at Dyn I am in charge of development efforts for anything related to our production site. Modernizing our framework and development process has been the largest task I have tackled. Implementing git, gulp, less was just the start."
                />
                <Exp 
                    company = "First Tracks Marketing" 
                    empTitle = "Front End Web Developer"
                    desc = "May 2014 - May 2016"
                    timeFrame = "Hired right out of college I was tasked with supporting a wide range of Wordpress driven websites. FTM, realize where I was most effective, quickly moved me to Junior Developer where I was tasked with building high quality, optimized, custom Websites. Leveraging my knowledge in Javascript, PHP and HTML I helped build over 20+ websites."
                />
                
                <Skill
                    skill = "React"
                    prof = {60}
                />
            </div>
        )
    }
}

export default Resume;

//Deps
import React from 'react';
import { ProgressBar } from 'react-bootstrap';

interface Props {
    skill: string,
    progress: number,
}

const Skill: React.FC<Props> = ({
    skill,
    progress
}) => (
    <div className="skill">
        <p>{skill}</p>
        <ProgressBar >
            <ProgressBar className="customProgress" now={progress} key={1} />
            <ProgressBar animated now={100 - progress} key={2} />
        </ProgressBar>
        <hr></hr>
    </div>
);

export default Skill;
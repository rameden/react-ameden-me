
//Deps
import React from 'react';

interface Props {
    company: string,
    title: string,
    desc: string,
    timeFrame: string
}

const Experience: React.FC<Props> = ({
    company,
    title,
    desc,
    timeFrame
}) => (
        <div className="single-exp">
            <h4 className="margin-bottom-remove">{company}</h4>
            <p className="text-muted margin-remove">{title}</p>
            <div className="badge badge-success">{timeFrame}</div>
            <p className="margin-small-top">{desc}</p>
        </div>
);

export default Experience;
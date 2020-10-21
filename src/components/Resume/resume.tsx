//Deps
import React from 'react';
import { Modal, Image, Button, Row, Col, Container } from 'react-bootstrap';
import headshot from '../../media/headshot.jpg';
import Experience from './experience';
import Skill from './skill';

interface InternalProps {
    closeHandler(): void;
}

const Resume: React.FC<InternalProps> = ({
    closeHandler,
}) => (
    <>
        <Modal.Header>
                <div className="resume-intro-left">
                    <Image className="float-left margin-right" src={headshot} width="100" roundedCircle />
                    <div className="resume-into-title">
                        <h1 className="margin-remove">Ryley Ameden</h1>
                        <div className="intro-sub">
                            <h3 className="text-muted margin-right">UI/UX Developer</h3>
                        </div>
                    </div>
                </div>
                <div className="resume-intro-right">
                    <div><strong>P:</strong> <a className="link-muted" href="tel:6039371029">603.937.1029</a></div>
                    <div><strong>@:</strong> <a className="link-muted" href="mailto:ryley@ameden.me">ryley@ameden.me</a></div>
                </div>
        </Modal.Header>
        <Modal.Body>
            <Container>
                <Row className="show-grid">
                    <Col xs={12} md={12}>
                        <h2 className="margin-top">EXPERIENCE</h2>
                        <Experience
                            company="Oracle"
                            title="Software Engineer"
                            timeFrame="May 2018 - Present"
                            desc="Joined the Oracle Virtual Networking User Experience team focusing on building the Networking UI for Oracle cloud. Lead a team focusing on identifying and improving user experience pain points within the Oracle Cloud. This team expanded to development operations, automated testing, analytics and reporting."
                        />
                        <Experience
                            company="Dyn + Oracle"
                            title="UI/UX Developer"
                            timeFrame="May 2016 - May 2018"
                            desc="Lead website developer in the complete redesign and development of Dyn.com. Bringing my background in design and development the team was able to bring a truly responsive and user friendly site to our customers. After the resign launch I committed my time to improving the user experience, SEO and PPC Campaigns."
                        />
                        <Experience
                            company="First Tracks Marketing"
                            title="Front End Web Developer"
                            timeFrame="May 2014 - May 2016"
                            desc="Hired right out of college I was tasked with supporting a wide range of Wordpress driven websites. FTM, realize where I was most effective, quickly moved me to Junior Developer where I was tasked with building high quality, optimized, custom Websites. Leveraging my knowledge in Javascript, PHP and HTML I helped build over 20+ websites."
                        />
                        <Experience
                            company="GigaOM Inc."
                            title="Data Conversion, Q/A Analyst,"
                            timeFrame="May 2012 - May 2014"
                            desc="Working closely with the GigaOM engineering team I was in charge of testing and debugging their new Wordpress multisite and suggesting refinements to ensure it’s quality and success. A/B testing and personalization campaigns helped push GigaOM to the front of IOT news."
                        />
                    </Col>
                </Row>
            </Container>

            <Container className="skills">
                    <h2 className="margin-top">SKILLS</h2>
                    <Row className="show-grid">
                        <Col xs={12} md={6} className="margin-bottom">
                            <h5 className="text-muted margin-top">LANGUAGES</h5>
                            <Skill
                                skill="REACT"
                                progress={95}
                            />
                            <Skill
                                skill="TYPESCRIPT"
                                progress={95}
                            />
                            <Skill
                                skill="Javascript"
                                progress={95}
                            />
                            <Skill
                                skill="CSS (LESS)"
                                progress={100}
                            />
                            <Skill
                                skill="REDUX"
                                progress={75}
                            />
                            <Skill
                                skill="HTML5"
                                progress={100}
                            />
                            <Skill
                                skill="PHP"
                                progress={90}
                            />
                        </Col>
                        <Col xs={6} md={6}>
                            <h5 className="text-muted margin-top">FRAMEWORKS</h5>
                            <Skill
                                skill="UIKit"
                                progress={100}
                            />
                            <Skill
                                skill="Bootstrap"
                                progress={90}
                            />
                            <Skill
                                skill="Pure.CSS"
                                progress={75}
                            />
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={12} md={6}>
                            <h5 className="text-muted margin-top">SOFTWARE</h5>
                            <Skill
                                skill="Adobe Creative Cloud"
                                progress={90}
                            />
                            <Skill
                                skill="Sketch"
                                progress={90}
                            />
                            <Skill
                                skill="Figma"
                                progress={75}
                            />
                            <Skill
                                skill="Invision"
                                progress={75}
                            />
                        </Col>
                        <Col xs={6} md={6}>
                            <h5 className="text-muted margin-top">CMS</h5>
                            <Skill
                                skill="WORDPRESS"
                                progress={100}
                            />
                            <Skill
                                skill="REST API"
                                progress={75}
                            />
                            <Skill
                                skill="DOCKER"
                                progress={70}
                            />
                        </Col>
                    </Row>
            </Container>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={closeHandler}>Close</Button>
        </Modal.Footer>
    </>
);

export default Resume;

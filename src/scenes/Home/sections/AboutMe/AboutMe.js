import React from 'react';
import './AboutMe.css';
import { Container, Row, Col } from 'reactstrap';
import FlowBackground from './components/FlowBackground/FlowBackground';
import Bullet from './components/Bullet/Bullet';
import FloatingPhoto from './components/FloatingPhoto/FloatingPhoto';
import Skill from './components/Skill/Skill';
import { Element } from 'react-scroll';
import { Link } from 'react-scroll';

const defaultDelay = window.defaultDelay;
const update = window.update;
/*const Skype = window.Skype;
const SkypeWebControl = window.SkypeWebControl;*/
class AboutMe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bShow: false
    };
    this.showComponent = this.showComponent.bind(this);
  }

  showComponent() {
    this.setState({
      bShow: true
    });
  }
  showSVGFlow() {
    update();
  }
  componentDidMount() {
    setTimeout(this.showComponent, defaultDelay);
    //setTimeout(this.showSVGFlow, defaultDelay + 1000);
    //update();
  }

  render() {
    let hideOrShow = 'hidden';
    if (this.state.bShow === true) {
      hideOrShow = '';
    }
    return (
      <Element
        id="about-section"
        className={['about-me', hideOrShow].join(' ')}
      >
        <FlowBackground>
          <Container>
            <div className="title wow bounceInLeft animated">About Me</div>
            <div className="title-bar wow bounceInLeft animated" />
            <Row>
              <Col lg="6" xs="12">
                <Row>
                  <Col sm="6" xs="12" className="fadeIn animated wow">
                    <Bullet
                      iconName="fa-lightbulb-o"
                      title="Creative"
                      description="Doing the same thing over and over, yet expecting different results, is the definition of the just creative."
                    />
                  </Col>
                  <Col sm="6" xs="12" className="fadeIn animated wow">
                    <Bullet
                      iconName="fa-clock-o"
                      title="Punctuality"
                      description="It is difficult to prove myself reliable when people are required to wait for me."
                    />
                  </Col>
                </Row>
              </Col>
              <Col lg="6" xs="12">
                <Row>
                  <Col sm="6" xs="12" className="fadeIn animated wow">
                    <Bullet
                      iconName="fa-calendar-check-o"
                      title="Organized"
                      description="I do one thing at a time with perfect result. And then I move on next."
                    />
                  </Col>
                  <Col sm="6" xs="12" className="fadeIn animated wow">
                    <Bullet
                      iconName="fa-handshake-o"
                      title="Communicative"
                      description="Communication is the foundation of effective teamwork and career success."
                    />
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="about-me-section">
              <Col lg="6" xs="12">
                <div className="photo-container">
                  <FloatingPhoto />
                </div>
                <div className="photo-title">Who is this guy?</div>
                <div className="photo-description">
                  I am a young-motivated{' '}
                  <span className="decorate"> Full Stack developer</span> with
                  10+ years experience, who consider my self as a quick-learner
                  and always study new technologies for the best practice and
                  quality of work.
                  <div className="reach-out-me">
                    If you are someone who loves to make a professional
                    acquaintances,
                    <Link
                      to="contact-section"
                      className="page-scroll decorate"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      &nbsp;reach out to me&nbsp;
                    </Link>
                    to talk about technology, innovation or tennis!
                  </div>
                </div>
                <div className="connect-me">
                  <a
                    className="social-icon"
                    target="_blank"
                    href="https://www.linkedin.com/in/david-chan-a61b00214"
                  >
                    {' '}
                    <span className="fa fa-linkedin" />{' '}
                  </a>
                  <a
                    className="social-icon"
                    target="_blank"
                    href="https://github.com/full-stack-david"
                  >
                    {' '}
                    <span className="fa fa-github" />{' '}
                  </a>
                  <a
                    className="social-icon"
                    target="_blank"
                    href="mailto:davidchan321321@gmail.com"
                  >
                    {' '}
                    <span className="fa fa-envelope" />{' '}
                  </a>
                </div>
              </Col>
              <Col lg="6" xs="12">
                <div className="skills-container">
                  <Skill rate={95} label="PHP" />
                  <Skill rate={88} label="Node.js" />
                  <Skill rate={97} label="Laravel" />
                  <Skill rate={95} label="Database" />
                  <Skill rate={92} label="Android/iOS" />
                  <Skill rate={95} label="React/Next" />
                  <Skill rate={92} label="Vue/Nuxt" />
                  <Skill rate={85} label="Angular" />
                  <Skill rate={92} label="HTML/CSS" />
                  <Skill rate={90} label="Python" />
                  <Skill rate={85} label="Ethereum" />
                  <Skill rate={87} label="Web3.js" />
                </div>
              </Col>
            </Row>
          </Container>
        </FlowBackground>
        <svg
          id="curveUpColor"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="100%"
          height="100"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0 100 C 20 0 50 0 100 100 Z" />
        </svg>
      </Element>
    );
  }
}

export default AboutMe;

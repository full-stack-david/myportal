import React from 'react';
import HoverButton from '../../../../components/HoverButton/HoverButton';
import './Welcome.css';

class Welcome extends React.Component {
  render() {
    return (
      <div className="welcome-component">
        <div id="typist-container" className="typist-container">
          <span className="title">
            Hello, I'm <span className="highlight">David Chan.</span>
          </span>
          <br />
          <br />
          <span className="quote">
            Passionate Full-Stack Developer with 10+ years of experience
            <br />
            Seeking to leverage broad development experience
          </span>
        </div>
        <div className="button-container showAfter10Secs">
          <HoverButton targetID="projects-section" label="View my work" />
          <HoverButton targetID="contact-section" label="Hire me" />
        </div>
      </div>
    );
  }
}

export default Welcome;

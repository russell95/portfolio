import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            My name is <span className="purple">Russell Chua </span>
            from <span className="purple"> Singapore.</span>
            <br />I am a graduate from Nanyang Technological University 
            majoring in Computer Science with an elective focus in Data Science and Artificial Intelligence
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Sports
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Hackathons
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "The best way to predict the future is to create it"{" "}
          </p>
          <footer className="blockquote-footer">Abraham Lincoln</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

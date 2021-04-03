import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import editor from "../../Assets/Projects/codeEditor.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Scantron"
              description="Current examination procedure requires school staff to check the matriculation card of each student. This is a manual process that is rather time consuming. The level of accuracy is also dependent on the staff member that is performing the checks.
              To improve this issue, our team has proposed to use a facial-recognition based system powered by artificial intelligence. This system will be able to accurately verify a student’s identity as they enter the examination venue."
              link="https://github.com/russell95/scantron"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Flight Tracker"
              description="This project consist of 2 components, Flight Data Collector and a flight visualization application. The objective of this application is to 
                            create and streamline data collection and pipe it seamlessly into a visualisation program. This would open opportunities for developing pocket 
                            size real-time flight visualization tool"
              link="https://github.com/russell95/flighttracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Navi Mall"
              description="Software Engineering project that utilizes data mining techiniques to crawl imformation of malls and shops around the Singapore, creating a central 
                            repository for all shopping mall information including parking recommendations"
              link="https://github.com/russell95/CZ2006-Software-Engineering"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Chatbot Framwework"
              description="The objective of this project is to design a full stack web application to compare a variable set of FAQ Chatbot API endpoints. 
                            The chatbot platform includes a text input and a speech input for intuitiveness and to cater for real live scenarios"
              link="https://github.com/SpeechLabNTU/chatbot_web_framework"
            />
          </Col>

        </Row>
        
      </Container>
    </Container>
  );
}

export default Projects;

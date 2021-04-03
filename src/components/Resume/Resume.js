import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import pdf from "../../Assets/Resume.pdf";

function Resume() {

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Autodesk Singapore - Software Developer"
              date="Aug 2020 - Dec 2020"
              content={[
                "Research and develop product analytics and enhance analytics dashboard to drive better product decision. Improve AutoCAD Web App to support PWA",
                "Enhancement of AutoCAD web core engine, automating the process of creating cross platform software for desktop, web & mobile.",
              ]}
            />
            <Resumecontent
              title="Accenture Singapore - Solution Architect"
              date="Jun 2020 - Jul 2020"
              content={[
                "Understanding technological architecture and providing solutions that aligns with overall business needs.",
                "Development of change request report for new technology upgrades and implementation plans.",
              ]}
            />
            <Resumecontent
              title="Govtech Singapore - Frontend Engineer"
              date="May 2019 - Aug 2019"
              content={[
                "Worked on developing CI/CD pipelines to ensure efficient software testing and project migrations.",
                "Proposed web architecture and framework. Developed serverless application with ReactJS, AWS API Gateway and Lambda.",
                "Wrote Cloudformation scripts that improved overall service migration solutions adopted across the application infrastructure teams"
              ]}
            />
            <h3 className="resume-title">Academic Projects</h3>
            <Resumecontent
              title="Chatbot Framework for Chatbot Performance Comparison"
              content={[
                "Developed a full stack web application with NodeJS and ReactJS that serves as a Chatbot platform for Multi-Chatbot service comparisons.",
                "Integrated real-time speech transcription for Chatbot interactions",
                "Developed own Deep Neural Network based Text Classification model for question and answer matching"
              ]}
            />
            <Resumecontent
              title="Face Recognition Application for attendance taking"
              content={[
                "Built on Face API to extract facial descriptors for matching on specified threshold between NodeJS and Firebase",
                "Managed to achieve accurate readings and capture attendance with minimal false positives for a class size of 50 students"
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Nanyang Technological University, Singapore"
              date="2017 - 2020"
              content={["Bachelor of Engineering Computer Science",
                        "Honours with Distinction",
                        "Elective Focus - Artificial Intelligence and Data Science"]}
            />
            <Resumecontent
              title="University of California, Los Angeles"
              date="2018"
              content={["Summer Exchange Program",
                        "Course - Algorithms and Engineering Communication"]}
            />
            <Resumecontent
              title="Singapore Polytechnic, Singapore"
              date="2012 - 2015"
              content={["Diploma in Infocomm Security Management"]}
            />
            <h3 className="resume-title">Hackathons</h3>
            <Resumecontent
              title="Central Provident Fund (CPF) Hackathon - First Place"
              date="2020"
              content={[
                "Leverage Microsoft Azure services to build a personalized digital experience for CPF members. Built a data driven web application backed by azure’s machine learning technology and container orchestration tools conforming to high availability and scalability practices"
              ]}
            />
            <Resumecontent
              title="Shopee SCSE Hackathon - Second Place"
              date="2020"
              content={[
                "Ideated and proposed a mobile learning platform for university students comprising of topic modelling, resource recommendation along and group collaboration. Developed transcription and topic modelling as a Proof of Concept"
              ]}
            />
            <Resumecontent
              title="HackNTU hackathon - Third Place"
              date="2019"
              content={[
                "Proposed and developed a first responder application that leverages facial recognition technology to quickly identify patient’s or victim’s medical profile during emergencies"
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;

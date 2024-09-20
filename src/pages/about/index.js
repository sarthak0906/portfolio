import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4 text-blur-out">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4" style={{ color: '#aa9c92' }}>{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4" style={{ color: '#aa9c92' }}>Work Timeline</h3>
          </Col>
          <Col lg="7">
            <div className="cards-container">
              <div className="card card1">
                <a className="card1-link" href="#" target="_blank" rel="noopener noreferrer">
                  <p className="mainhead">(SDE-2, Classplus)</p>
                  <p className="small">Scaled campaign projects to handle 5-10x more users and reduced error rates from 10-12% to 2-3%. Developed and maintained a multimedia stack, eCommerce platform, and Content Management Service, supporting 10 million users and achieving a 25x growth with 15% reduced load times..</p>
                  <div className="go-corner">
                    <div className="go-arrow">
                      →
                    </div>
                  </div>
                </a>
              </div>
              <div className="card card2">
                <a className="card2-link" href="#" target="_blank" rel="noopener noreferrer">
                  <p className="mainhead">(DEVELOPER, Forvis Mazars LLP)</p>
                  <p className="small">Developed and implemented projects from scratch for internal use and client deployment, ensuring high functionality and user satisfaction. Collaborated with a Project Manager to create a cross-platform desk booking platform and a CRM application, handling both frontend and backend development.</p>
                  <div className="go-corner">
                    <div className="go-arrow">
                      →
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4" style={{ color: '#aa9c92' }}>Skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title" style={{ color: '#aa9c92' }}>{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

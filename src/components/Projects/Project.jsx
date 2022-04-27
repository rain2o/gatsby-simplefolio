import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Row, Col } from 'react-bootstrap';
import ProjectImg from '../Image/ProjectImg';

const Project = ({ project, isDesktop, isMobile }) => {
  const { title, info, info2, role, stack, url, repo, img, id } = project;
  return (
    <Row key={id}>
      <Col lg={5} sm={12}>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <div className="project-wrapper__text">
            <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
            <div>
              {role && (
                <p className="mb4">
                  <strong>Role: </strong>
                  {role}
                </p>
              )}
              {info && (
                <p className="mb4">
                  <strong>Details: </strong>
                  {info}
                </p>
              )}
              {stack && (
                <p className="mb4">
                  <strong>Stack: </strong>
                  {stack.map((tech, i) => {
                    return (
                      <span key={tech.name}>
                        {i > 0 && ', '}
                        {(url && (
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-color-main"
                            href={tech.url}
                          >
                            {tech.name}
                          </a>
                        )) || <span>{tech.name}</span>}
                      </span>
                    );
                  })}
                </p>
              )}
              {info2 && <p className="mb-4">{info2 || ''}</p>}
            </div>
            {url && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-btn--hero"
                href={url}
              >
                See Live
              </a>
            )}

            {repo && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                className={(url && 'cta-btn text-color-main') || 'cta-btn cta-btn--hero'}
                href={repo}
              >
                Source Code
              </a>
            )}
          </div>
        </Fade>
      </Col>
      <Col lg={7} sm={12}>
        <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <div className="project-wrapper__image">
            <a
              href={url || '#!'}
              target="_blank"
              aria-label="Project Link"
              rel="noopener noreferrer"
            >
              <Tilt
                options={{
                  reverse: false,
                  max: 8,
                  perspective: 1000,
                  scale: 1,
                  speed: 300,
                  transition: true,
                  axis: null,
                  reset: true,
                  easing: 'cubic-bezier(.03,.98,.52,.99)',
                }}
              >
                <div data-tilt className="thumbnail rounded">
                  <ProjectImg alt={title} filename={img} />
                </div>
              </Tilt>
            </a>
          </div>
        </Fade>
      </Col>
    </Row>
  );
};

Project.propTypes = {
  project: PropTypes.arrayOf(PropTypes.object),
  isDesktop: PropTypes.bool,
  isMobile: PropTypes.bool,
};

export default Project;

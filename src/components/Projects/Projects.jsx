import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import Filters from './Filters';
import Project from './Project';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);
  const technologies = projects.reduce(
    (acc, { stack }) => [...acc, ...stack.map(({ name }) => name)],
    []
  );
  const filters = [...new Set(technologies)].sort();

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          <Filters filters={filters} onFilter={(selected) => setSelectedFilters(selected)} />
          {projects.map((project) => {
            const techs = project.stack.map(({ name }) => name);
            return selectedFilters.length === 0 ||
              selectedFilters.some((filter) => techs.includes(filter)) ? (
              // eslint-disable-next-line react/jsx-indent
              <Project {...{ project, isDesktop, isMobile }} />
            ) : (
              <></>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;

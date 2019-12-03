import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import Carousel from 'react-bootstrap/Carousel';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => (
  <Main fullPage={true}>
    <Helmet title="Projects" />
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>Projects</h2>
          <p>A selection of projects that I think are worth your time</p>
        </div>
      </header>
      <Carousel slide={false}>
        {data.map((project) => (
          <Carousel.Item>
            <Cell data={project} key={project.title} />
          </Carousel.Item>
        ))}
      </Carousel>
    </article>
  </Main>
);

export default Projects;

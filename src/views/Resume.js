import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import { skills, categories } from '../data/resume/skills';

const sections = [
  'Education',
  'Experience',
  'Skills',
  'Courses',
  'References',
];
class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.eduRef = React.createRef();
    this.expRef = React.createRef();
    this.referencesRef = React.createRef();
    this.coursesRef = React.createRef();
    this.skillsRef = React.createRef();
  }

  scrollIntoView = (section) => {
    console.log(section);
    let ref = null;
    switch (section) {
      case 'education':
        ref = this.eduRef;
        break;
      case 'experience':
        ref = this.expRef;
        break;
      case 'references':
        ref = this.referencesRef;
        break;
      case 'courses':
        ref = this.coursesRef;
        break;      
      case 'skills':
        ref = this.skillsRef;
        break;      
      default:
    }
    if (ref) window.scrollTo(0, ref.current.offsetTop);
  }

  render() {
    return <Main>
      <Helmet title="Resume" />
      <article className="post" id="resume">
        <header>
          <div className="title">
            <h2>Resume</h2>
            <div className="link-container">
              {sections.map((sec) => (
                <h4 key={sec} onClick={this.scrollIntoView.bind(this, sec.toLowerCase())}>
                  <a>{sec}</a>
                </h4>
              ))}
            </div>

          </div>
        </header>
        <Education data={degrees} refProp={this.eduRef} />
        <Experience data={positions} refProp={this.expRef} />
        <Skills skills={skills} categories={categories} refProp={this.skillsRef} />
        <Courses data={courses} refProp={this.coursesRef}/>
        <References refProp={this.referencesRef} />
      </article>
    </Main>;
  }
}

export default Resume;

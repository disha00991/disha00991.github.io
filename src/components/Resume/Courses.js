import React from 'react';
import PropTypes from 'prop-types';

import Course from './Courses/Course';

const getRows = (courses) => courses.sort((a, b) => {
  let ret = 0;
  if (a.university > b.university) ret = -1;
  else if (a.unversity < b.university) ret = 1;
  else if (a.number > b.number) ret = 1;
  else if (a.number < b.number) ret = -1;
  return ret;
}).map((course, idx) => (
  <Course
    data={course}
    key={course.title}
    last={idx === courses.length - 1}
  />
));

const Courses = ({ data, refProp }) => (
  <div ref={refProp} className="courses">
    <div className="link-to" id="courses" />
    <div className="title">
      <h3>Courses Taken</h3>
    </div>
    <h5>Undergraduate</h5>
    <ul className="course-list">
      {getRows(data.undergraduate)}
    </ul>
    <h5>Graduate</h5>
    <p>To be updated soon</p>
  </div>
);

Courses.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    number: PropTypes.string,
    link: PropTypes.string,
    univerity: PropTypes.string,
  })),
};

Courses.defaultProps = {
  data: [],
};

export default Courses;

import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><span>{data.title}</span></h3>
        <span className="published">{data.subtitle}</span>
        <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
      </header>
      <div className="row">
        <span className="col-md-6 image">
          <img src={process.env.PUBLIC_URL + data.image} alt={data.title} />
        </span>
        <div className="description col-md-6">
          <p>{data.desc}</p>
        </div>
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;

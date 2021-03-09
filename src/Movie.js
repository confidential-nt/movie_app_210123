import React from "react";
import PropTypes from "prop-types";
// import "./Movie.css";

function Movie({ year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, i) => (
            <li key={i} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">
          {summary.length > 180 ? `${summary.slice(0, 180)}...` : summary}
        </p>
      </div>
    </div>
  ); //It does not. React needs key to know the difference between elements that look the same.
  //react의 jsx는 html처럼 보이지만 결국엔 js. 따라서 class 대신 className을 써야 react가 혼동하지 않음. label의 for 속성도 마찬가지. htmlFor이라고 써야.
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;

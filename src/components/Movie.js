import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, medium_cover_image, title, summary, genres }) {
  return (
    <div>
      <img src={medium_cover_image} alt="title" />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.protoType = {
  id: PropTypes.number.isRequired,
  medium_cover_image: PropTypes.toString.isRequired,
  title: PropTypes.toString.isRequired,
  summary: PropTypes.toString.isRequired,
  genres: PropTypes.arrayOf(PropTypes.toString).isRequired,
};

export default Movie;

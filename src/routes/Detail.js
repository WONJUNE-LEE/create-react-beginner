import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
    setLoading(false);
    console.log(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <img src={detail.large_cover_image}></img>
          <h1>{detail.title}</h1>
          <ul>
            <li>DESCRIPTION: {detail.description_full}</li>
            <li>RUNTIME: {detail.runtime}minutes</li>
            <li>GENRES: {detail.genres}</li>
            <li>RATING: 10 / {detail.rating}</li>
            <li>YEAR: {detail.year}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Detail;

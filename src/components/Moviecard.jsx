import React from "react";
export default function Moviecard(props) {
  console.log(props.movies[0]);
  return (
    <div className="moviecard">
      <h1>{props.movies[0].backdrop_path}</h1>
      <img
        src={`http://image.tmdb.org/t/p/w500/${props.movies[0].poster_path}`}
        alt="display image"
      />
    </div>
  );
}

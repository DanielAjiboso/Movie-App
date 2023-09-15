import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Moviecard from "./components/Moviecard";
import axios from "axios";
import imdbLogo from "./IMDB_Logo_2016.svg";
import { Link } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const present = new Date();
  const dateUTC = Date.UTC(present);

  const API_URL = "https://api.themoviedb.org/3/movie/";
  const API_KEY = "e0b1fc5ecbc2eac6eed8d5c59970e3d8";
  const [movies, setMovies] = useState([]);
  const [johnWickData, setJohnWickData] = useState([]);

  const randomNumber = Math.floor(Math.random() * (100 - 85 + 1) + 85);
  const imdb = imdbLogo;

  useEffect(() => {
    axios
      .get(`${API_URL}top_rated?api_key=${API_KEY}`)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error Fetching data", error);
      });

    axios
      .get(`https://api.themoviedb.org/3/search/movie`, {
        params: {
          api_key: API_KEY,
          query: "John Wick",
          language: "en_US",
        },
      })
      .then((response) => {
        setJohnWickData(response.data.results);
      })
      .catch((err) => {
        console.error("error");
      });
  }, []);
  console.log(movies);
  return (
    <div className="App">
      {movies.length && (
        <Header
          movie={movies[0]}
          randomNumber={randomNumber}
          imdbLogo={imdbLogo}
        />
      )}
      <div className="container">
        <div className="top-text">
          <h1>Featured movie</h1>
          <p>See more</p>
        </div>

        {movies.length &&
          movies
            .slice(0, 10)
            .map((movie) => (
              <Moviecard
                movies={movie}
                API_KEY={API_KEY}
                key={movie.id}
                randomNumber={randomNumber}
                imdbLogo={imdbLogo}
              />
            ))}
      </div>
    </div>
  );
}

export default App;

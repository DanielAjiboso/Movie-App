import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Moviecard from "./components/Moviecard";
import axios from "axios";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const present = new Date();
  const dateUTC = Date.UTC(present);

  const API_URL = "https://api.themoviedb.org/3/movie/top_rated?";
  const API_KEY = "e0b1fc5ecbc2eac6eed8d5c59970e3d8";
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_URL}api_key=${API_KEY}`)
      .then((response) => {
        setMovies(response.data.results.slice(0, 10));
      })
      .catch((error) => {
        console.error("Error Fetching data", error);
      });
  }, []);
  // console.log(movies);
  return (
    <div className="App">
      {movies.length && <Header movies={movies} />}
      {movies.length && <Moviecard movies={movies} />}
    </div>
  );
}

export default App;

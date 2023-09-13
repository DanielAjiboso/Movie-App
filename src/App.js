import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Moviecard from "./components/Moviecard";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const API_URL = "https://api.themoviedb.org/3/movie/{movie_id}?api_key={your_api_key}&language";
  const [movies, setMovies] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const searcMovies = async;
  return (
    <div className="App">
      <Header />
      <Moviecard />
    </div>
  );
}

export default App;

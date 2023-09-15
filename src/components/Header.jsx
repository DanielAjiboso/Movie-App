import React from "react";

export default function Header(props) {
  const img_url =
    "https://s3-alpha-sig.figma.com/img/154e/382f/b7e8be84d7248b8b9812172cad1cd0c9?Expires=1695600000&Signature=OsNLaMa8CnSNnQeUuaSqQc4ItYP-nbUj0fcZVpScVICd8NzZdIEz80MJBNhEju2IQOUMxTFuDw4FavRj8rGqkBK6uLeq0vJG~Y-EPhP~LInckDsnzuQ5Y2BdrMTWOqkPaFdDAPmQXSLpWteihqFaB2f2VQGC6Za5gHu7t3hq62C0X21qB-8H7osPvHdFmh0c-B881mmDx6JQCfpUQRzNHAjMxdvS~LrFQthLfxQb29n8J4z25KNx4cSOzRDCMXJaP0gpPcPRXMYrFdz-nbt~yFJLM37b1YLKasT2gd5K2x6nxGQWVPlwAafWCDzo3TzVihPSl0FiwjfkbBREka5jUQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
  const img_src = `http://image.tmdb.org/t/p/w500/${props.movie.poster_path}`;
  return (
    <div
      className="header"
      style={{
        width: "100%",
        height: "600px",
        display: "flex",
        flexDirection: "column",
        backgroundImage: `url(${img_src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        color: "white",
      }}
    >
      <div className="header-body">
        {/* <img src={img_src} alt="Image" /> */}
        <div className="searchBar">
          <div>
            <p>MovieBox</p>
          </div>
          <input type="text" />
          <div>
            <p>Sign In</p>
          </div>
        </div>
        <div className="header-details">
          <h1>{props.movie.title}</h1>
          <div className="header-ratings">
            <div className="imdb">
              <p>
                {/* {props.imdbLogo} */}
                {props.movie.vote_average}/10
              </p>
            </div>

            <div className="rotten">
              <p>{<p>{`${props.randomNumber}%`}</p>}</p>
            </div>
          </div>
          <p className="header-overview">{props.movie.overview}</p>
          <input type="button" value="Watch Trailer" className="button" />
        </div>
      </div>
    </div>
  );
}

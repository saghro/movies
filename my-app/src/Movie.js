import React from 'react';
import "./movie.css"
function Movie(props) {
  return (
    // <div>
    //   <h2>{props.title}</h2>
    //   <img src={props.posterURL} alt={props.title} />
    //   <p>{props.description}</p>
    //   <p>Rating: {props.rating}</p>
    // </div>
<>

    <div className="movie_card" id="bright">
  <div className="info_section" style={{backgroundImage:"url("+props.imgbc}}>
    <div className="movie_header">
      <img className="locandina" src={props.posterURL}/>
      <h1>{props.title}</h1>

      <p className="type">{props.gender}</p>
    </div>
    <div className="movie_desc">
      <p className="text">
     <p>{props.description}</p>
        
      </p>
    </div>
    <div className="movie_social">
      <ul>
        <li><i className="material-icons">share</i></li>
        <li><i className="material-icons"></i></li>
        <li><i className="material-icons">chat_bubble</i></li>
      </ul>
    </div>
  </div>
  <div className="blur_back bright_back"></div>
</div>
</>
  );
}

export default Movie;
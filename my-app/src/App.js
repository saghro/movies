import "./nav.css"
import React from 'react';
import Movie from './Movie';
function App() {
  const movie = [{
    title: 'Bright',
    gender:'Action, Crime, Fantasy',
    description: 'Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for',
    posterURL: 'https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg',
    rating: '9.2',
    imgbc:"https://occ-0-2433-448.1.nflxso.net/art/cd5c9/3e192edf2027c536e25bb5d3b6ac93ced77cd5c9.jpg"
  },{
    title: 'Tomb Raider',
    gender:'Action, Fantasy',
    description: 'Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.',
    posterURL: 'https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg',
    rating: '9.2',
    imgbc:"https://fsmedia.imgix.net/cd/c9/5e/ba/4817/4d9a/93f0/c776ec32ecbc/lara-crofts-neck-looks-unnatural-in-the-new-poster-for-tomb-raider.png"
  },{
    title: 'Black Panther',
    description: 'TChalla, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim o TChallas fathers mistake.',
    posterURL: 'https://mr.comingsoon.it/imgdb/locandine/235x336/53715.jpg',
    rating: '9.2',
    imgbc:"https://www.gannett-cdn.com/-mm-/c03fd140debe8ad4c05cf81a5cad7ad61a12ce52/c=0-1580-2985-3266&r=x803&c=1600x800/local/-/media/2017/06/09/USATODAY/USATODAY/636326272873599176-Black-Panther-Teaser.jpg"
  },{
    title: 'The ggggg',
    description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    posterURL: 'https://www.example.com/the-godfather-poster.jpg',
    rating: '9.2',
    imgbc:"https://www.gannett-cdn.com/-mm-/c03fd140debe8ad4c05cf81a5cad7ad61a12ce52/c=0-1580-2985-3266&r=x803&c=1600x800/local/-/media/2017/06/09/USATODAY/USATODAY/636326272873599176-Black-Panther-Teaser.jpg"
  },{
    title: 'The Godfatggher',
    description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    posterURL: 'https://www.example.com/the-godfather-poster.jpg',
    rating: '9.2',
    imgbc:"https://www.gannett-cdn.com/-mm-/c03fd140debe8ad4c05cf81a5cad7ad61a12ce52/c=0-1580-2985-3266&r=x803&c=1600x800/local/-/media/2017/06/09/USATODAY/USATODAY/636326272873599176-Black-Panther-Teaser.jpg"
  }]

  return (
    <div>
       <nav>
      <h1>My Navigation Bar</h1>
      <form>
        <label htmlFor="search">Search:</label>
        <input type="text" id="search" name="search" />
        <label htmlFor="filter">Filter:</label>
        <input type="text" id="filter" name="filter" />
        <input type="submit" value="Submit" />
      </form>
    </nav>
    {movie.map(k=>{return(<Movie
        title={k.title}
        gender={k.gender}
        description={k.description}
        posterURL={k.posterURL}
        rating={k.rating}
        imgbc={k.imgbc}
      />)})}
    
    </div>
  );
}

export default App;
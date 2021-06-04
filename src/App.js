import './App.css';
import {BrowserRouter as Router,Route } from "react-router-dom";
import HOme from "./home";
import Favori from "./favoris";
import {useState} from "react";
import Dash from './dashb';


function App() {
  // incrémentation favories
const [favorites,setFavorites]=useState(0)
const getFavorites=()=>{
setFavorites(favorites+1);
 };
  //Add getFavoritMovies
//   const [favoritMovie,setFavoritMovies]=useState([])

// const getFavoritMovies=(e)=>{
// favoritMovie.push(e)
// console.log(favoritMovie)
// }

const [favoritMovie,setFavoritMovie]=useState([])
const getFavoritMovie=(el)=>{
setFavoritMovie((favoritMovie) => [...favoritMovie, el]);
};
  return (
    <div>
      <Router>
          <Route exact path="/"><HOme  favorites={favorites} getFavorites={getFavorites} getFavoritMovie={getFavoritMovie}  /> </Route>
          <Route  path="/favoris"> <Favori favorites={favorites} favoritMovie={favoritMovie} getFavoritMovie={getFavoritMovie}  /> </Route>
          <Route  path="/dashb"> <Dash /> </Route>
      </Router>
    </div>
  );
}

export default App;

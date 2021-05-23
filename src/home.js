import React, {useState} from 'react'
import Movie from './componant.js/carte'
import Partie1 from './componant.js/part1';
import Footer from './componant.js/footer';
import Navb from './componant.js/nav';


function HOme({favorites,getFavorites,getFavoritMovie}) {
  
  const[search, setSearch]= useState("");
  const handelSearch =(event)=>{
    setSearch(event.target.value)
  }
    return (
      <div>
        <Navb favorites={favorites}/>
       <Partie1 handelSearch={handelSearch}/>
       <Movie search={search} getFavorites={getFavorites} getFavoritMovie={getFavoritMovie} />
       <hr></hr>
       <Footer />
      </div>
    );
  }

export default HOme;

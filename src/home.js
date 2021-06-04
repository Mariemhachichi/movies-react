import React, {useState} from 'react'
import Movie from './componant.js/carte'
import Partie1 from './componant.js/part1';
import Footer from './componant.js/footer';
import Navb from './componant.js/nav';
import Partie2 from './componant.js/part2';


function HOme({favorites,getFavorites,getFavoritMovie}) {
  const[search, setSearch]= useState("");
  const handelSearch =(event)=>{
    setSearch(event.target.value)
  }
    return (
      <div>
        <Navb favorites={favorites} handelSearch={handelSearch}/>
       <Partie1 />
       <Movie search={search} getFavorites={getFavorites} getFavoritMovie={getFavoritMovie} />
       <Partie2 />
       <hr className="hr"></hr>
       <Footer />
      </div>
    );
  }

export default HOme;

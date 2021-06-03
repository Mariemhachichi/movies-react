import axios from 'axios';
import React,{useEffect,useState} from 'react'
import {Card,Button} from  'react-bootstrap'

function Movie({search,getFavorites,getFavoritMovie}) {
const [film, setFilm] = useState([])
const getmovie = ()=>{
  axios.get('https://fir-movie-e73ed-default-rtdb.firebaseio.com/posts.json')
  .then ((response) => setFilm(response.data)
  );
}
useEffect(()=> {getmovie()
},[])
    return(
      search ===''?

      <div className="cart">
   {film.map(el=>
     <Card className="carte" style={{ width: '18rem' }}>
  <Card.Img className="img" variant="top" src={el.Images} />
  <Card.Body>
    <Card.Title className="titr"> {el.Title} </Card.Title>
    <Card.Text className="txt" >{el.Genre}</Card.Text>
    <Card.Link className="link" href="#">View</Card.Link>
    <Card.Title><Button className="btnt" onClick={()=>{ getFavorites(); getFavoritMovie(el)}}><i class="fas fa-heart"></i> </Button></Card.Title>                        
  </Card.Body>
</Card>
        )}</div>:
        film.filter(el=>
          el.Title.toLowerCase().includes(search.toLowerCase())).map(el=>
            <div className="cart">
               <Card className="carte" style={{ width: '18rem' }}>
  <Card.Img className="img" variant="top" src={el.Images} />
  <Card.Body>
    <Card.Title className="titr"> {el.Title} </Card.Title>
    <Card.Text className="txt" >{el.Genre}</Card.Text>
    <Card.Link className="link" href="#">{el.Rate}</Card.Link>
  </Card.Body>
</Card>  
</div>    
          )
          )
        }
       
export default Movie
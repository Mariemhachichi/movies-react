import React, { useEffect,useState } from 'react';
import axios from "axios"
import {Card,Button} from 'react-bootstrap'
import Update from './update';



function Movies({input2,handleChange2}){

  //  dlete film
  useEffect(()=>{getMovie()},[])
  const deleteRow=(id, e)=>{
     axios.delete(`https://fir-movie-e73ed-default-rtdb.firebaseio.com/posts/${id}/.json`)  
       .then(response => {  
         console.log("response: delete", response);
       }) 
       .catch(err=> 
         console.log(err)
       );
     }

    //  get film

    const [Movie,setMovie]= useState([])
    const getMovie=()=> {
     
        axios.get('https://fir-movie-e73ed-default-rtdb.firebaseio.com/posts.json').then((response) => {
         
        setMovie(response.data);
        console.log(Movie)
          });
    }
  
  return(
    <div  className="cart">
          {Object.keys(Movie).map((id) => (
            <div>
            <Card className="carte" style={{ width: '18rem' }}>
  <Card.Img className="img" variant="top" src={Movie[id].Images} />
  <Card.Body>
    <Card.Title className="titr"> {Movie[id].Title} </Card.Title>
    <Card.Text className="txt" >{Movie[id].Genre}</Card.Text>
    <Card.Link className="link" href="#"> 
    </Card.Link>
    <Button className="btn btn-danger btnt"  onClick={() => deleteRow(id)}>
      <i class="fas fa-trash"></i>
    </Button>
    <Update input2={input2} Movie={Movie} id={id} handleChange2={handleChange2} />
     </Card.Body>
</Card>
          </div>
            
          )
           
          )}
       
      
    </div>
   )
    
 }

export default Movies
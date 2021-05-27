import React, { useEffect,useState } from 'react';
import axios from "axios"
import {Card,Button} from  'react-bootstrap'
import Update from './update';



function Movies({input2,handleChange2}){

  //  dlete film
  useEffect(()=>{getMovie()},[])
  const deleteRow=(id, e)=>{
     axios.delete(`http://localhost:3004/posts/${id}`)  
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
        axios.get('http://localhost:3004/posts').then((response) => {
        setMovie( response.data);
          });
    }
 
       
  return(
    <div  className="cart">
          {Movie.map((el) => (
            <div>
            <Card className="carte" style={{ width: '18rem' }}>
  <Card.Img className="img" variant="top" src={el.Images} />
  <Card.Body>
    <Card.Title className="titr"> {el.Title} </Card.Title>
    <Card.Text className="txt" >{el.Genre}</Card.Text>
    <Card.Link className="link" href="#"> 
    </Card.Link>
    <Button className="btn btn-danger btnt"  onClick={(e) => deleteRow(el.id, e)}>
      <i class="fas fa-trash"></i>
    </Button>
    <Update input2={input2} el={el} handleChange2={handleChange2} />
     </Card.Body>
</Card>
          </div>
            
          )
           
          )}
       
      
    </div>
   )

 }

export default Movies
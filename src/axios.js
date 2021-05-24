import React, { useEffect,useState } from 'react';
import axios from "axios"
import {Card,Button} from  'react-bootstrap'


 

function Movies(){

    //  axios film

    const [Movie,setMovie]= useState([])
    const getMovie=()=> {
        axios.get('http://localhost:3004/posts').then((response) => {
          
            setMovie( response.data);
           
          });

    }
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
       
  return(
    <div>
          {Movie.map((el) => (
            <div>
            <Card className="carte" style={{ width: '18rem' }}>
  <Card.Img className="img" variant="top" src={el.Images} />
  <Card.Body>
    <Card.Title className="titr"> {el.Title} </Card.Title>
    <Card.Text className="txt" >{el.Awards}</Card.Text>
    <Card.Link className="link" href="#">View</Card.Link>
     </Card.Body>
</Card>
            <Button className="btn btn-danger"  onClick={(e) => deleteRow(el.id, e)}>Delete</Button>
          </div>
            
          )
           
          )}
       
      
    </div>
   )

 }

export default Movies
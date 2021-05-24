import React, { useEffect,useState } from 'react';
import axios from "axios"
import {Card,Button,Modal} from  'react-bootstrap'


 

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
       

      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
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
  {/* strat modal */}
  <>
      <Button variant="primary" className="btnt" onClick={handleShow}>
      <i class="fas fa-pen"></i> 
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>


  {/* end modal */}
    </Card.Link>
    <Button className="btn btn-danger btnt"  onClick={(e) => deleteRow(el.id, e)}>
      <i class="fas fa-trash"></i>
    </Button>
     </Card.Body>
</Card>
          </div>
            
          )
           
          )}
       
      
    </div>
   )

 }

export default Movies

import axios from 'axios';
import React, {useState} from 'react'
import { Button, Form, Modal} from "react-bootstrap";

const Admin =() => {
        const[input,setInput]=useState(
          {Title :"",
          Genre:"",
          Img :""
         }
        )
   
          const refrech=()=>{
            window.location.reload()
          }
       const handleChange=(e)=>{ 
    const {name,value}= e.target;
    setInput(
      {  ...input,
        [name]:value
    });
       }
     
      /*add  */
    const handleSubmit=(e)=>{
    e.preventDefault()
    console.log('input',input)
    
    axios.post('https://fir-movie-e73ed-default-rtdb.firebaseio.com/posts.json',JSON.stringify(input))
    .then((response)=> console.log(response))
    .then(response=>refrech())
    .catch((error)=> console.log('error'))
    }
    const [show, setShow] = useState(false);
      return(
        <>
        <Button className="btnmodal" variant="primary" onClick={() => setShow(true)}>
          Add Movie
        </Button>
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Add Movie
            </Modal.Title>
          </Modal.Header>
          <Modal.Body> 
          <Form onSubmit={handleSubmit}>
    
    <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control  onChange={handleChange}  value={input.Title} name="Title"  type="text" placeholder="Title" />
        </Form.Group>
      <Form.Group>
        <Form.Label>Genre</Form.Label>
        <Form.Control onChange={handleChange} value={input.Genre} name="Genre" type="text" placeholder="Entrer Genre" />
      </Form.Group>
    
    
      <Form.Group>
        <Form.Label>Img</Form.Label>
        <Form.Control  onChange={handleChange}  value={input.Img} name="Img"  type="text" placeholder="enter lien d'image" />
      </Form.Group>
      <Button type="submit" className="m-2 btnn">Add Movie</Button>
    </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
       
    


export default Admin;

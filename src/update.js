import React from 'react'
import { Button, Form,Modal } from "react-bootstrap";
import {useState} from 'react'
import axios from 'axios'

function Update({Movie,id}) {
 
 //  edit film
      const[input2,setInput2]=useState(
        {Title: Movie[id].Title,
        Genre: Movie[id].Genre,
        Img: Movie[id].Img,
       }
      )
      const handleChange2=(e)=>{ 
        const {name,value}= e.target;
        setInput2(
          {  ...input2,
            [name]:value
        });
           }

           const Update=(id)=>{
            axios.put(`https://fir-movie-e73ed-default-rtdb.firebaseio.com/posts/${id}/.json`,input2)  
              .then(response => {  
               setInput2 (response.data)
              }) 
            }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return(
    <div>
   {/* strat modal */}
  <>
      <Button variant="primary" className="btnt" onClick={handleShow}>
      <i class="fas fa-pen"></i> 
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form >
    <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control value={input2.Title} onChange={handleChange2} defaultValue={Movie[id].Title} name="Title"  type="text" placeholder="Title" />
        </Form.Group>
      <Form.Group>
        <Form.Label>Genre</Form.Label>
        <Form.Control value={input2.Genre} onChange={handleChange2} defaultValue={Movie[id].Genre} name="Genre" type="text" placeholder="Enter Genre" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Img</Form.Label>
        <Form.Control value={input2.Img} onChange={handleChange2} defaultValue={Movie[id].Img}  name="Img"  type="text" placeholder="enter lien d'image" />
      </Form.Group>
      <Button className="m-2" onClick={()=>{Update(id)}}>Submit</Button>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
</div>
  )
      }

export default Update

import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form } from "react-bootstrap";

const Admin =() => {
        const[input,setInput]=useState(
          {Title :"",
          Desc:"",
          Img :""
    
         }
        )
       const handleChange=(e)=>{
    const {name,value}= e.target;
    setInput(
      {  ...input,
        [name]:value
    });
    
       }
    //*************add to file json */
    const handleSubmit=(e)=>{
    e.preventDefault()
    console.log('input',input)
    
    axios.post('http://localhost:3004/posts',input).then((response)=> console.log(response))
    .catch((error)=> console.log('error'))
    }
      return(
    <div className="color">
    <Form onSubmit={handleSubmit} className="col-md-4 form">
    
    <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control  onChange={handleChange}  value={input.Title} name="Title"  type="text" placeholder="Title" />
        </Form.Group>
    
    
      <Form.Group>
        <Form.Label>Desc</Form.Label>
        <Form.Control onChange={handleChange} value={input.Desc} name="Desc" type="text" placeholder="Enter desc" />
      </Form.Group>
    
    
      <Form.Group>
        <Form.Label>Img</Form.Label>
        <Form.Control  onChange={handleChange}  value={input.Img} name="Img"  type="text" placeholder="enter lien d'image" />
      </Form.Group>
      <Button type="submit" className="m-2">Add</Button>
      <Button type="submit" className="m-2">Edit</Button>
      <Button type="submit" className="m-2">Delete</Button>
    </Form>
    
    
    </div>
       )
    


}

export default Admin;

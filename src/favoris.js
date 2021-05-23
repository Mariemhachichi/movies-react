import React from 'react'
import {Card} from  'react-bootstrap'
import Navb from './componant.js/nav'

const Favor = ({favoritMovie, favorites}) => {
  return(
    <div>
      <Navb  favorites={favorites}/>
       <div className="container d-flex flex-wrap mt-5">
       {favoritMovie.map((el)=>
          <div>
       <div className="card ms-3">
       <Card className="carte" style={{ width: '18rem' }}>
  <Card.Img className="img" variant="top" src={el.Images} />
  <Card.Body>
    <Card.Title className="titr"> {el.Title} </Card.Title>
    <Card.Text className="txt" >{el.Awards}</Card.Text>
    <Card.Link className="link" href="#">{el.Rate}</Card.Link>
  </Card.Body>
</Card>    
        </div>
         </div>
         
          
         )
       }

</div>  
    </div>
   )

 }

export default Favor

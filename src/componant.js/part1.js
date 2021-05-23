import React from 'react';
import {Form, Container} from 'react-bootstrap';


const Partie1 = ({handelSearch}) => {
	return (
        <div className="part1">
        <div className="par1">
            <Container>
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
        <Form inline className="search">
         <input type="text" 
         placeholder="Search" 
         onChange = {handelSearch}
         className="mr-sm-2 srch" />
         </Form>
         </Container>
          </div>
      </div>
	);
};



  export default Partie1;
import React,{useState } from 'react';
import {Fade,Button} from 'react-bootstrap'


const Partie2 = () => {
    // const [open, setOpen] = useState(false);
    // const [open1, setOpen1] = useState(false);
    // const [open2, setOpen2] = useState(false);

	return (
        <div>
            <div className="part3">
            <h4>Stream these movies and thousands more</h4>
            <button className="bttnt">BROWSE MOVIES</button>
         </div>
         <div className="part4">
         <h4>Stream on all your favorite devices, <br></br> any time, anywhere</h4>
         <img src="https://static.kanopy.com/images/webshop-landing/default-locale/device-tablet-phone.png" alt="img" height="60%" width="70%" className="imm"/>
         
         {/* <>
      <div className="d-flex justify-content-around">
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
      >
        Toggle text
      </Button>
      <Button
        onClick={() => setOpen1(!open1)}
        aria-controls="example-fade-text"
        aria-expanded={open1}
      >
        Toggle text
      </Button>
      <Button
        onClick={() => setOpen2(!open2)}
        aria-controls="example-fade-text"
        aria-expanded={open2}
      >
        Toggle text
      </Button>
      </div>
      <div className="d-flex justify-content-around">
      <Fade in={open}>
        <div id="example-fade-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Fade>
      <Fade in={open1}>
        <div id="example-fade-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Fade>
      <Fade in={open2}>
        <div id="example-fade-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Fade>
      </div>
      
    </>  */}
  );
</div>
        </div>
	);
};



  export default Partie2;
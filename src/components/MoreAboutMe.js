import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import './button.css';
function MoreAboutMe() {
  const [open, setOpen] = useState(false);

  return (
    <div >
      <Button id='button'
       variant='lg'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}

      >
        About Me 💁
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
        <br/>
        <p >
        <strong>
        My name is Harun. I’d introduce myself as a learner and a builder. 
        I have an intensive thirst to learn new technologies and build beautiful things that live on the Internet.
        I'm passionate about learning information technology. 
        There is always a portion of my free time for exploring and learning new technologies.
         I believe in continuous learning and learning technologies nourish my mind. 
         Now, I am looking for an entry-level/internship/junior developer job.
         </strong>
        </p>
        </div>
      </Collapse>
    </div>
  );
}
export default MoreAboutMe;
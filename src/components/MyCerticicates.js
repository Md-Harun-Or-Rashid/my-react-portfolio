import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import './button.css';

function MyCertificates() {
  const [open, setOpen] = useState(false);
    return (  
        <div >
           <Button id='button'
           variant='lg'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
      Certifications 📜
      </Button>
      <Collapse in={open}>
      <div id="example-collapse-text">
        <br/>
      <Carousel variant="dark" >
      <Carousel.Item> 
        <img
          className="img-thumbnail"
          src={require('./certificates/a.png')}
          alt="First slide" 
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-thumbnail"
          src={require("./certificates/b.png")}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-thumbnail"
          src={require("./certificates/c.png")}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-thumbnail"
          src={require("./certificates/d.png")}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-thumbnail"
          src={require("./certificates/e.png")}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-thumbnail"
          src={require("./certificates/f.png")}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-thumbnail"
          src={require("./certificates/g.png")}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    </Collapse>
    </div>
    )
}

export default MyCertificates;
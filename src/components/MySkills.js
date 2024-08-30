import React, { useState } from 'react';
import { harun } from "./Text";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';


function Myskills(){
  const [open, setOpen] = useState(false);
    return (
            
        <div>
           <Button id='button'
           variant='lg'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
      Skills 👨🏻‍💻
      </Button>
      <Collapse in={open}>
      <div id="example-collapse-text">
        <br/>
        <h2>I have experience with the following tools and languages.</h2>
        <br/>
        <h3>Front-end technologies:</h3>
        <div class="table-responsive">
        <table>
            <tr>
              {harun.frontend.map(im=> <td> <img src={im} width="50"  height="50"></img></td>)}
            </tr>
        </table>
       <p> <strong>HTML | CSS | JavaScript | Bootstrap | jQuery | React | typescript.</strong> </p>
         
         <br/>
        <h3>Programming languages and backend technologies:</h3>
        <table>
            <tr>
              {harun.backend.map(im=> <td> <img src={im} width="50"  height="50"></img></td>)}
            </tr>
        </table>
         <p><strong> C | C++ | Java | Python | Nodejs | express js | REST API | Postman . </strong></p>
         <br/>
        <h3>Database:</h3>
        <table>
            <tr>
              {harun.database.map(im=> <td> <img src={im} width="auto"  height="50"></img></td>)}
            </tr>
        </table>
         <p> <strong>PostgreSQL.</strong></p>
         <br/>
        <h3>Testing:</h3>
        <table>
            <tr>
              {harun.testing.map(im=> <td> <img src={im} width="auto"  height="50"></img></td>)}
            </tr>
        </table>
         <p><strong>Jest</strong></p>
         <br/>
        <h3>DevOps:</h3>
        <table>
            <tr>
              {harun.devops.map(im=> <td> <img src={im} width="auto"  height="50"></img></td>)}
            </tr>
        </table>
         <p><strong> Git | Github | Firebase | heroku. </strong></p>
         <br/>
        <h3>IDE:</h3>
        <table>
            <tr>
              {harun.ide.map(im=> <td> <img src={im} width="auto"  height="50"></img></td>)}
            </tr>
        </table>
         <p> <strong>Visual studio code | pycharm </strong></p>
         <br/>
        <h3>Code editors:</h3>
        <table>
            <tr>
              {harun.codeeditors.map(im=> <td> <img src={im} width="auto"  height="50"></img></td>)}
            </tr>
        </table>
         <p><strong> notepad++ </strong></p>
         <h3>Other technical skills : </h3>
         <p><strong>Power Apps | Power Automate | Microsoft Forms | Excel | PowerPoint | Power BI</strong></p>
        </div>
        </div>
        </Collapse>
        </div>
         )

}

export default Myskills;
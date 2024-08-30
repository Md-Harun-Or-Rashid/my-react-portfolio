import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import {harun} from './Text';
import Myskills from './MySkills';
import MyCertificates from './MyCerticicates';
import MoreAboutMe from './MoreAboutMe';
function About() {
  return(
   <div>
   <div className='container'>
   <br/>
   <h1>Hello! 😊</h1>
   <br/>
   <h2>{harun.intro}</h2>
   <br/>
  <TypeWriterEffect
   textStyle={{
     fontFamily:'Papyrus',
     color: '#FFFFFF',
     fontWeight: 500,
     fontSize: '2 em',
   }}
    startDelay={2000}
    cursorColor="#FFFFFF"
    multiText= {harun.multi}
    loop={true}
    nextTextDelay={1000}
    typeSpeed={30}
   />
   <br/>
   <h4>🌎 Based in Espoo, Finland.</h4>
   <br/><br/>
   <Myskills/>
    <br/>
    <MyCertificates/>
    <br/>
    <MoreAboutMe/> 
    <br/>
    
    <footer style={{marginTop:'5%'}}>

      <p>© 2024 Harun Rashid</p>
     </footer>
   </div>
   </div>
)
}

export default About;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight,faCirclePlay } from '@fortawesome/free-solid-svg-icons'

function Hero() {
  return (<>
    <img id='star2' src={require('../assets/star2.png')}  alt='star'/>
    <img id='shade' src={require('../assets/shade.png')}  alt='shade'/>
    <div id='hero1'>
        <div id='htext'>
           <h1>Make The Best <br/>Financial Decisions</h1>
           <p>Cum Et Convallis Risus Placerat Aliuam, Nunc. Scelerisque Aliquet<br/> Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
          <div id='hbtn'>  
            <div>
             <h4><a href='/'>Get Started <FontAwesomeIcon id='arrght' icon={faArrowRight} /></a></h4>
            </div>
            <div id='watch'>
             <h4><a href='/'><FontAwesomeIcon id='play' icon={faCirclePlay} />Watch Video</a></h4>
            </div>
          </div>
        </div>
        <div>
          <img src={require('../assets/az.png')}  alt='A-Z'/>
        </div>
    </div>
    <div>
     <img id='hero-right' src={require('../assets/hero-right.png')}  alt='hero-right'/>
    </div>
    </>
  )
}

export default Hero
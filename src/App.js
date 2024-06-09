import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Features from './Components/Features';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    function loaderAnimation() {
      var loader = document.querySelector("#loader")
      setTimeout(function () {
          loader.style.top = "-100%";
      }, 4200)
    }
    loaderAnimation();
}, []); 
  return (
    <>
     <div id='loader'>
        <h1>Adaptive</h1>
        <h1>Transparent</h1>
        <h1>Unreasonable</h1>
      </div>
     <div className='main'>
      <div id="hero">
        <Navbar/>
        <Hero/>
      </div>
      <div id="features">
        <Features/>
      </div>
      <div id="advantage1"></div>
      <div id="advantage2"></div>
      <div id="testimonial"></div>
      <div id="faq"></div>
      <div id="download"></div>
      <div id="footer"></div>
       
     </div>
    </>
  );
}

export default App;

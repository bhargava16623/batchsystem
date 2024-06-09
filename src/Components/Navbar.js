import React from 'react';

function Navbar() {
  return (
  <>
    <img id='star1' src={require('../assets/star1.png')}  alt='star'/>
    <div id='navbar'>
        <div id='navbar-left'>
           <img src={require('../assets/logo.png')}  alt='uifry-logo'/>
           <h4><a href='/'>Home</a></h4>
           <h4><a href='/'>AboutUs</a></h4>
           <h4><a href='/'>Pricing</a></h4>
           <h4><a href='/'>Features</a></h4>
        </div>
        <div id='navbar-right'>
          <h4><a href='/'>Download</a></h4>
        </div>
    </div>
  </>
  )
}

export default Navbar
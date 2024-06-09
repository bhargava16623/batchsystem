import React from 'react'

function Features() {
  return (
    <>
    <img id='shade2' src={require('../assets/shade2.png')}  alt='shade2'/>
    <div id='feature-page'>
      <div>
        <img id='feature-img' src={require('../assets/featues.png')}  alt='feature'/>
      </div>
      <div id='feature-text'>
        <span id='f-head'>FEATURES</span>
        <h1>Uifry Premium</h1>
        <div>
          <div id='feature-point'>
            <h2><img id='ficon' src={require('../assets/icon1.png')}  alt='feature'/><span id='fp'>Budgeting Intervals</span></h2>
            <p>Cum Et Convallis Risus Placerat Aliuam, Nunc. Scelerisque Aliquet<br/> Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
          </div>
          <div id='feature-point'>
            <h2><img id='ficon' src={require('../assets/icon2.png')}  alt='feature'/><span id='fp'>Budgeting Intervals</span></h2>
            <p>Cum Et Convallis Risus Placerat Aliuam, Nunc. Scelerisque Aliquet<br/> Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
          </div>
          <div id='feature-point'>
            <h2><img id='ficon' src={require('../assets/icon3.png')}  alt='feature'/><span id='fp'>Budgeting Intervals</span></h2>
            <p>Cum Et Convallis Risus Placerat Aliuam, Nunc. Scelerisque Aliquet<br/> Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Features
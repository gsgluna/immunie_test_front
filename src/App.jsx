import { useState } from 'react'
import './App.css'


export default App

function App() {
 
    
  return (
    
    <>
      <div className="div-mobile">
      
      <div className="top">
        <a href="https://immunie.net/" target="_blank">
          <img src="https://immunie.s3.eu-west-1.amazonaws.com/logo_passe_verde_green_f0ddd7933b.svg" />
        </a>
        <br></br>
        
      </div>

      <div className="layer">
        
      </div>



      <div className="border-image">
          <div className="image">

             <img src="https://immuniecarteirinha.s3.amazonaws.com/User_Image.png"/>

          </div>
      </div>
      
      <div className="size-button1" >
        

        <button type="file">
          Alterar Foto 
        </button>
      
        
      </div>



      <div className="font-text1">
      <h2>Nome</h2>
      </div>
      
      <div className="font-name" id="name">
      <h1>Joao Samuel Souza de Luna</h1>
      </div>
      <div className="size-button2">
        <button>
          Alterar Nome 
        </button>

        <div className="font-text2">
      <h2>Acesso valido ate</h2>
      </div>

      <div className="font-text3" id="date">
      <h1>22/06/2025</h1>
      </div>
      
      
        
      </div>
 
      </div>
      
      <p className="read-the-docs">
        Teste de Full-Stack, por Samuel Luna
      </p>
    </>

  )
}






import './App.css';
import Kep from './kep';
import { adatLista } from './adatok';
import React, {useState} from "react";


function App() {

  const [kepIndex, setNagyKep] = useState(0);
  function nagyKepCsere(id){
    console.log("nagykép csere", id)
    console.log(props.nagyKepCsere)
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Képgaléria</h1>

      </header>
      <article>
        <div className="fokep">
          <h3>Kép címe</h3>
          <div className="kep">
            <Kep adat={adatLista[kepIndex]}/>
          </div>
          <p>bhábrbrbbrbrbrbrb HÁBLRLRLLRLLLRLLRRLL</p>
        </div>
        <div className="galeria">
          {
            adatLista.map((elem, index) => {
              return (
                <Kep adat={elem} key ={index} />
              )
            })
          }
        </div>
      </article>
    </div>
  );
}

export default App;

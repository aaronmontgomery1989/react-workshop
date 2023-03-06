import React from 'react';
import AdDesigner from './components/AdDesigner';
import Header from './components/Header';
import Votes from './components/Votes';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <div className="App">

      <main>

        <div className="row m-0">

          <div className="col p-0">
            <Header />
          </div>

        </div>

        <div className="row m-0">

          <div className="col ">
            <AdDesigner />
          </div>
          
          <div className="col ">
            <Votes />
          </div>
          
        </div>

      </main>

    </div>
  );
}

export default App;

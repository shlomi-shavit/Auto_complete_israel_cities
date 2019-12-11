import React from 'react';
import './App.css';
import AutoCompleteText from './AutoCompleteText/AutoCompleteText.js';
import cities from './json/city_list.json';

function App() {
  return (
    <div className="App">
        <div className="App-component">
            <div className="App-component">
                <AutoCompleteText cities={cities}/>
            </div>
        </div>
    </div>
  );
}

export default App;

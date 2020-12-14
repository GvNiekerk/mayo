import './App.css';
import MainPage from './Main';
import Card from './card';
import React, {useState} from 'react';
function App() {
  const[name,setName] = useState('Your name');
  const[job,setJob] = useState('Your job');
  const[about,setAbout] = useState('Description of your job');

    return (
      <div className="App">
        <MainPage />      
  
      </div>
    );
  }


export default App;

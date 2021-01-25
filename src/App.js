import './App.css';
import { Main } from './Main';
import React, { useState } from 'react';
import Footer from './footer';

function App() {
  const [name, setName] = useState('Your name');
  const [job, setJob] = useState('Your job');
  const [about, setAbout] = useState('Description of your job');

  return (
    <div className="App">
      <Main />
      <Footer />
    </div>
  );
}

export default App;

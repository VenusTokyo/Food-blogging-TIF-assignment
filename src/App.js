import React from 'react';
import './App.css';
import { About, Articles, Footer, Header } from './containers';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Articles/>
      <Footer/>
    </div>
  );
}

export default App;

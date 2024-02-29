import React from 'react';
import './App.scss';
import {Header} from "./components/Header";
import {Hero} from "./components/Hero";
import {Skills} from "./components/Skills";
import {Footer} from "./components/Footer";


function App() {
  return (
    <div className="App">
        <Header/>
        <Hero />
        <Skills/>
        <Footer />
    </div>
  );
}

export default App;

import React, {useCallback, useEffect, useRef} from 'react';
import './App.scss';
import {Header} from "./components/Header";
import {Hero} from "./components/Hero";
import {Footer} from "./components/Footer";
import {About} from "./components/About";
import {Projects} from "./components/Projects";


function App() {

  return (
    <div className="App">
        <Header/>
        <Hero/>
        <About/>
        <Projects /> 
        <Footer />
    </div>
  );
}

export default App;

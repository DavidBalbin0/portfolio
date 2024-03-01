import React from 'react';
import './App.scss';
import {Header} from "./components/Header";
import {Hero} from "./components/Hero";
import {Footer} from "./components/Footer";
import {About} from "./components/About";


function App() {
  return (
    <div className="App">
        <Header/>
        <Hero />
        <About/>
        <Footer />
    </div>
  );
}

export default App;

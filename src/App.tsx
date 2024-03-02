import React, {useEffect, useState} from 'react';
import './App.scss';
import {Header} from "./components/Header";
import {Hero} from "./components/Hero";
import {Footer} from "./components/Footer";
import {About} from "./components/About";
import getImageFromS3 from "./infra/aws/awsS3Service";
import cmsService from "./infra/DatoCms/cmsService";
import {PostCard} from "./components/PostCard";
import {Projects} from "./components/Projects";


function App() {
    const [imageSrc, setImageSrc] = useState<string | undefined>();





  return (
    <div className="App">
        <Header/>
        <Hero />
        <About/>
        <Projects /> 
        <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import APropos from './components/About';
import Competences from './components/Skills';
import Projects from './components/Projects'; // attention ici Projects.js et pas Projets.css
import Interests from './components/Interests';
import Contact from './components/Contact';
import PiedDePage from './components/PiedDePage';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <APropos />
        <Competences />
        <Projects />
        <Interests />
        <Contact />
      </main>
      <PiedDePage />
    </div>
  );
}

export default App;

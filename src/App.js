import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
import Volunteering from './components/Volunteering';
import Events from './components/Events'

function App() {
  return (
    <div class="flex flex-col">
      <Navbar/>
      <div class="w-full relative overflow-y-scroll
       hide-scrollbar-chrome hide-scrollbar-firefox mt-16 h-section scroll-smooth">
         <Home/>
         <Volunteering/>
         <Events/>
      </div>
    </div>
  );
}

export default App;

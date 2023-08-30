import React from 'react';
import './App.css'
import Header from './Components/Header';
import Main from './Components/Main'
import ProjectSection from './Components/ProjectSection';
import ContactMeSection from './Components/ContactMeSection';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/projects' element={<ProjectSection />} />
          <Route path='/contacts' element={< ContactMeSection />} />
          <Route path='/' element={App} />

        </Routes>
      </BrowserRouter>

      <ProjectSection />
      <ContactMeSection />
    </div>
  );
}

export default App;

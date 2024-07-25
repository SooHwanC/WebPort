import React, { useEffect, useState } from 'react';
// import './reset.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import JavaBurger from './pages/JavaBurger';
import CircleSlider from './pages/CircleSlider';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/detail/1' element={<JavaBurger />} />
        <Route path='/CircleSlider' element={<CircleSlider />} />
      </Routes>
    </>
  );
}

export default App;

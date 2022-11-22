import React from 'react';
import Home from "./components/Home";
import Contact from "./components/Contact";
import Service from './components/Service';
import { Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';


function App() {

  const msg = useSelector(state=>state.msg);

  return (
    <div>
      <div>{msg}</div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='/service' element={<Service />} />
        </Routes>
    </div>
  );
}

export default App;
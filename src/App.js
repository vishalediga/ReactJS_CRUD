// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';
import Cal from './Cal';

import './App.css'
import EmpCreate from './EmpCreate';
import EmpDetail from './EmpDetail';
import EmpEdit from './EmpEdit';


const App = () => {
  return (
    <div className="hi">
      <h1 className='head'>React JS CRUD Operations</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cal />} />
          <Route path="/employee/create" element={<EmpCreate/>} />
          <Route path="/employee/detail/:empid" element={<EmpDetail/>} />
          <Route path="/employee/edit/:empid" element={<EmpEdit/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
 
};

export default App;

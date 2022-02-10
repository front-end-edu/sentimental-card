import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Main from './Main';
//import Header from './Header';
import Select from './Select';
import './scss/Common.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='App'>
          <header className='header'>
            <Link className='link' to='/'>
              <img src='assets/images/main/logo.png' />
            </Link>
            <nav className='nav'>
              <ul className='nav-list'>
                <li className='item'>
                  <Link className='link' to='/'>
                    Home
                  </Link>
                </li>
                <li className='item'>
                  <Link className='link' to='./Select'>
                    Make Card
                  </Link>
                </li>
              </ul>
            </nav>
          </header>

          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/Select' element={<Select />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

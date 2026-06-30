import './App.css';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import logo from './assets/logo.png'
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import AllRoutes from './Routes';
import { Link, useLocation } from 'react-router-dom';

function App() {
  const { pathname } = useLocation();

  return (
    <div className="App">
      <div className="tab-menu">
        <div className='title-shell'>
          <img src={logo} alt="Bonfire Logo" width="50" height="50" />
          <h1>Bonfire Reliquary</h1>
        </div>
        <div className='item-link-shell'>
          <Link to="/" className={pathname === '/' && 'disabled'}><i class="fa-solid fa-backpack"></i></Link>
          <Link to="/ingredients" className={pathname === '/ingredients' && 'disabled'}><i class="fa-solid fa-mercury"></i></Link>
          <Link to="/potions" className={pathname === '/potions' && 'disabled'}><i class="fa-solid fa-flask-round-potion"></i></Link>
          <Link to="/talismans" className={pathname === '/talismans' && 'disabled'}><i class="fa-solid fa-hand-holding-magic"></i></Link>
          <Link to="/scrolls" className={pathname === '/scrolls' && 'disabled'}><i class="fa-solid fa-scroll"></i></Link>
          <Link to="/enchanted" className={pathname.substring(0, '/enchanted'.length) === '/enchanted' && 'disabled'}><i class="fa-solid fa-crown"></i></Link>
        </div>
      </div>

      <AllRoutes />

      <Toaster position="bottom-right" toastOptions={{
        success: {
          style: {
            background: 'green',
            color: 'whitesmoke'
          },
        },
        error: {
          duration: 60000,
          style: {
            background: 'red',
            color: 'whitesmoke'
          },
        },
      }} />
    </div>
  );
}

export default App;

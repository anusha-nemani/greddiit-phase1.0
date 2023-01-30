import React, { useState } from 'react';
import logo from '../../images/letter-g.png';
import dashboard from '../../images/dashboard.png';
import banned from '../../images/banned.png';
import details from '../../images/details.png';
import logout from '../../images/logout.png';
import './Main.css';
// import Collapse from 'react-bootstrap/Collapse';
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav class='navbar bg-light navbar-expand-lg'>
      <div class='container-fluid'>
        <a class='navbar-brand fs-3' href='#'>
          <img src={logo} id='login' className='p-1 m-2' />
          Greddit
        </a>
        <button
          class='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarNav'>
          <ul class='navbar-nav ms-auto'>
            <li class='nav-item dropdown'>
              <a
                class='nav-link dropdown-toggle'
                aria-current='page'
                href='#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'>
                <img src={dashboard} alt='' />
              </a>
              <ul class='dropdown-menu'>
                <li>
                  <a class='dropdown-item' href='#'>
                    PROFILE
                  </a>
                </li>
                <li>
                  <a class='dropdown-item' href='#'>
                    MY SUB GREDDIIITS PAGE
                  </a>
                </li>
                <li>
                  <a class='dropdown-item' href='#'>
                    SUBGREDDIITS PAGE
                  </a>
                </li>
              </ul>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='#'>
                <img src={banned} style={{ width: '72px' }} alt='' />
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='#'>
                <img src={details} alt='' />
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='/'>
                <img src={logout} alt='' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

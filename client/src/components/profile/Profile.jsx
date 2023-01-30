import React from 'react';
import UserInfo from './UserInfo.jsx';
import user from '../../images/user.png';

export default function Profile(props) {
  return (
    <div className='ms-5 me-5'>
      <div
        className='z-0 display-4 text-center ms-2 me-2 mt-5 mb-5'
        id='welcome-msg'
        style={{
          fontFamily: 'Hack, sans-serif',
          textTransform: 'uppercase',
          color: 'black',
          fontWeight: '400',
          letterSpacing: '5px',
        }}>
        Great to see you!
      </div>
      <div className='row pt-5'>
        <div className='col-lg-4 text-center'>
          <div
            className='card shadow p-5 ps-4 pe-4 animated zoomIn slow align-items-center mb-3'
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              background: 'radial-gradient(#f5b694, #F98a50)',
            }}>
            <h3
              className='mt-0'
              data-bs-toggle='collapse'
              data-bs-target='#collapseForm'
              aria-expanded='false'
              aria-controls='collapseForm'
              style={{ cursor: 'pointer' }}>
              USER DETAILS
            </h3>
            <div
              className='align-items-center text-center mb-4'
              style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src={user}
                alt=''
                className='align-items-center'
                data-bs-toggle='collapse'
                data-bs-target='#collapseForm'
                aria-expanded='false'
                aria-controls='collapseExample'
                style={{ width: '150px', cursor: 'pointer' }}
              />
              <div
                className='fs-3 mb-2'
                data-bs-toggle='collapse'
                data-bs-target='#collapseForm'
                aria-expanded='false'
                aria-controls='collapseExample'
                style={{ cursor: 'pointer' }}>
                Admin
              </div>
            </div>
            <div class='collapse' id='collapseForm'>
              <UserInfo />
            </div>
          </div>
        </div>
        <div className='col-lg-4 text-center'>
          <div
            className='card shadow p-5 ps-4 pe-4 animated zoomIn slow align-items-center mb-3'
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              background: 'radial-gradient(#f5b694, #F98a50)',
            }}>
            <h3
              className='mt-0'
              data-bs-toggle='collapse'
              data-bs-target='#collapseFollowers'
              aria-expanded='false'
              aria-controls='collapseFollowers'
              style={{ cursor: 'pointer' }}>
              FOLLOWERS
            </h3>
            <h1
              className='display-2 mt-4 pt-3 mb-5'
              data-bs-toggle='collapse'
              data-bs-target='#collapseFollowers'
              aria-expanded='false'
              aria-controls='collapseFollowers'
              style={{ cursor: 'pointer' }}>
              50
            </h1>
            <div class='collapse text-center' id='collapseFollowers'>
              <ol style={{ listStyleType: 'none' }}>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsumkndewojsel dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipskndewojselum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sikndewojselt amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dokndewojsellor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dokndewojsellor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ol>
            </div>
          </div>
        </div>
        <div className='col-lg-4 text-center'>
          <div
            className='card shadow p-5 ps-4 pe-4 animated zoomIn slow align-items-center mb-3'
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              background: 'radial-gradient(#f5b694, #F98a50)',
            }}>
            <h3
              className='mt-0'
              data-bs-toggle='collapse'
              data-bs-target='#collapseFollowing'
              aria-expanded='false'
              aria-controls='collapseFollowing'
              style={{ cursor: 'pointer' }}>
              FOLLOWING
            </h3>
            <h1
              className='display-2 mt-4 pt-3 mb-5'
              data-bs-toggle='collapse'
              data-bs-target='#collapseFollowing'
              aria-expanded='false'
              aria-controls='collapseFollowing'
              style={{ cursor: 'pointer' }}>
              10
            </h1>
            <div class='collapse text-center' id='collapseFollowing'>
              <ol style={{ listStyleType: 'none' }}>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import Login from './Login';
import Register from './Register';

export default function Display(props) {
  return (
    <div className='container text-center' style={{ marginTop: '13vh' }}>
      <div className='row align-items-center'>
        <div className='col-md-6 mb-5 '>
          <Login isSignIn={props.isSignIn} setIsSignIn={props.setIsSignIn} />
        </div>
        <div className='col-md-6 mb-5'>
          <Register />
        </div>
      </div>
    </div>
  );
}

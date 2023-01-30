import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';

function Login(props) {
  console.log(localStorage.getItem('login'));
  const navigateTo = useNavigate();

  const [loginData, setLoginData] = useState({
    uname: '',
    password: '',
  });

  const { uname, password } = loginData;

  const onChange = (e) =>
    setLoginData({ ...loginData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (uname !== 'admin' || password !== 'admin') {
      console.log('here');
      props.setAlert('Invalid credentials!', 'danger');
      navigateTo('/');
    } else {
      props.setIsSignIn(true);
      localStorage.setItem('login', true);
      navigateTo('/dashboard/profile');
    }
  };

  return (
    <form
      className='card shadow p-5 ps-4 pe-4 animated zoomIn slow align-items-center w-75'
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        background: 'radial-gradient(#f5b694, #F98a50)',
      }}
      onSubmit={(e) => onSubmit(e)}>
      <h3 className='display4 mb-5 text-center'>LOGIN</h3>
      <div className='form-floating mb-3 '>
        <input
          type='text'
          class='form-control'
          name='uname'
          id='floatInput'
          value={uname}
          onChange={(e) => onChange(e)}
          placeholder='Username'
          //   style={{ width: '60%' }}
        />
        <label for='floatInput'>Username</label>
      </div>
      <div className='form-floating mt-2 mb-3'>
        <input
          type='password'
          class='form-control'
          name='password'
          id='floatPassword'
          value={password}
          onChange={(e) => onChange(e)}
          placeholder='Password'
        />
        <label for='floatPassword'>Password</label>
      </div>
      {uname && password ? (
        // <Link
        //   to={checkSignIn() ? '/dashboard/profile' : '/'}
        //   className='btn btn-outline-light mt-5 rounded-pill'
        //   style={{ width: '40%' }}>
        //   LOGIN
        // </Link>
        <button
          className='btn btn-outline-light mt-5 rounded-pill'
          style={{ width: '40%' }}>
          LOGIN
        </button>
      ) : (
        <button
          className='btn btn-outline-light mt-5 rounded-pill disabled'
          style={{ width: '40%' }}>
          LOGIN
        </button>
      )}
    </form>
  );
}

Login.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(Login);

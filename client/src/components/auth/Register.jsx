import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const navigateTo = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    uname: '',
    email: '',
    password: '',
  });

  const { firstName, lastName, uname, email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    navigateTo('/dashboard/profile');
  };

  return (
    <form
      className='card shadow p-5 ps-2 pe-2 animated zoomIn slow align-items-center w-75 text-center'
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        background: 'radial-gradient(#f5b694, #F98a50)',
      }}
      onSubmit={(e) => onSubmit(e)}>
      <h3 className='display4 mb-5 text-center'>SIGN UP</h3>
      <div className='form-floating mb-3 '>
        <input
          type='text'
          name='firstName'
          value={firstName}
          onChange={(e) => onChange(e)}
          class='form-control'
          id='floatingInput'
          placeholder='FirstName'
          //   style={{ width: '60%' }}
        />
        <label for='floatingInput'>First Name</label>
      </div>
      <div className='form-floating mb-3 '>
        <input
          type='text'
          name='lastName'
          value={lastName}
          onChange={(e) => onChange(e)}
          class='form-control'
          id='floatingLname'
          placeholder='LastName'
          //   style={{ width: '60%' }}
        />
        <label for='floatingLname'>Last Name</label>
      </div>
      <div className='form-floating mb-3 '>
        <input
          type='text'
          name='uname'
          value={uname}
          onChange={(e) => onChange(e)}
          class='form-control'
          id='floatingUname'
          placeholder='Username'
          //   style={{ width: '60%' }}
        />
        <label for='floatingUname'>Username</label>
      </div>
      <div className='form-floating mb-3 '>
        <input
          type='email'
          name='email'
          value={email}
          onChange={(e) => onChange(e)}
          class='form-control'
          id='floatingEmail'
          placeholder='Email'
          //   style={{ width: '60%' }}
        />
        <label for='floatingEmail'>Email</label>
      </div>
      <div className='form-floating mt-2 mb-3'>
        <input
          type='password'
          name='password'
          value={password}
          onChange={(e) => onChange(e)}
          class='form-control'
          id='floatingPassword'
          placeholder='Password'
        />
        <label for='floatingPassword'>Password</label>
      </div>
      {firstName && lastName && uname && email && password ? (
        // <Link
        //   to='/dashboard/profile'
        //   className='btn btn-outline-light     mt-5 rounded-pill'
        //   style={{ width: '30%' }}>
        //   SIGN UP
        // </Link>
        <button
          className='btn btn-outline-light     mt-5 rounded-pill'
          style={{ width: '30%' }}>
          SIGN UP
        </button>
      ) : (
        <button
          className='btn btn-outline-light     mt-5 rounded-pill disabled'
          style={{ width: '30%' }}>
          SIGN UP
        </button>
      )}
    </form>
  );
}

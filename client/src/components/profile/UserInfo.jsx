import React from 'react';
import ReactDOM from 'react-dom';

export default function UserInfo(props) {
  return (
    <div className='container text-center'>
      <div class='form-floating mt-5 mb-4'>
        <input
          type='text'
          class='form-control'
          id='floatingFname'
          placeholder='First Name'
          aria-label='First Name'
          aria-describedby='basic-addon1'
          style={{ maxWidth: '100%' }}
          disabled
        />
        <label for='floatingFname' className='ps-2'>
          First Name
        </label>
      </div>

      <div class='form-floating mt-5 mb-3 ms-0'>
        <input
          type='text'
          class='form-control'
          id='floatLname'
          placeholder='Last Name'
          aria-label='Last Name'
          aria-describedby='basic-addon2'
          style={{ maxWidth: '100%' }}
          disabled
        />
        <label for='floatLname' className='ps-2'>
          Last Name
        </label>
      </div>
      {/* </div> */}

      {/* <div className="row"> */}
      <div class='form-floating mt-5 mb-4'>
        <input
          type='text'
          class='form-control'
          id='floatUname'
          placeholder='Username'
          aria-label='Username'
          aria-describedby='basic-addon3'
          style={{ maxWidth: '100%' }}
          disabled
        />
        <label for='floatUname' className='ps-2'>
          Username
        </label>
      </div>

      <div class='form-floating mt-5 mb-3 ms-0'>
        <input
          type='email'
          class='form-control'
          id='enterEmail'
          placeholder='Email Address'
          aria-label='Email Address'
          aria-describedby='basic-addon2'
          style={{ maxWidth: '100%' }}
          disabled
        />
        <label for='enterEmail' className='ps-2'>
          Email Address
        </label>
      </div>
      {/* </div> */}

      <div className='row'>
        <div class='col-lg-3 form-floating mt-5 mb-4'>
          <input
            type='text'
            class='form-control'
            id='floatingAge'
            placeholder='Age'
            aria-label='Age'
            aria-describedby='basic-addon3'
            style={{ maxWidth: '100%' }}
            disabled
          />
          <label for='floatingAge' className='ps-4'>
            Age
          </label>
        </div>

        <div class='col-lg-9 form-floating mt-5 mb-3 ms-0'>
          <input
            type='text'
            class='form-control'
            id='floatingContact'
            placeholder='Contact'
            aria-label='Contact'
            aria-describedby='basic-addon2'
            style={{ maxWidth: '100%' }}
            disabled
          />
          <label for='floatingContact' className='ps-4'>
            Contact
          </label>
        </div>
      </div>
      <div class='form-floating mt-5 mb-3 ms-0'>
        <input
          type='password'
          class='form-control'
          id='enterPass'
          placeholder='Password'
          aria-label='Password'
          aria-describedby='basic-addon2'
          style={{ maxWidth: '100%' }}
          disabled
        />
        <label for='enterPass' className='ps-2'>
          Password
        </label>
      </div>
      <button className='btn btn-outline-light mt-5 mb-3 rounded'>EDIT</button>
    </div>
  );
}

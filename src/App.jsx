import { useState, Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Display from './components/auth/Display';
import Alert from './components/layout/Alert';
import Profile from './components/profile/Profile';
import './App.css';

//redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  const [isSignIn, setIsSignIn] = useState(false);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar isSignIn={isSignIn} setIsSignIn={setIsSignIn} />
          <Alert />
          <Routes>
            <Route
              path='/'
              element={
                <Display isSignIn={isSignIn} setIsSignIn={setIsSignIn} />
              }
            />
            <Route path='/dashboard/profile' element={<Profile />} />
          </Routes>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;

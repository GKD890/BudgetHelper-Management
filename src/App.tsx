import React from 'react';

import './App.css';
import LoginTab from './components/login/login';

function App() {
  return (
    <LoginTab userLabel='User' passwdLabel='Password' />
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import AppRouter from './components/AppRouter';

function App() {
  return (
    <div>
      <Router>
        <AppRouter/>
      </Router>
    </div>
  );
}

export default App;

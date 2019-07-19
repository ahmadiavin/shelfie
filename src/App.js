import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
    <Header />
    <Dashboard />
    <Form />

    </div>
  );
}

export default App;

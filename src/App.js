import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import {HashRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';

function App() {
  return (
    <HashRouter>
    <div className="App">
    <Header />
    <Dashboard />
    <Form />

    </div>
    </HashRouter>
  );
}

export default App;

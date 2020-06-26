import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SideBar from './components/layouts/SideBar';
import Main from './components/layouts/Main';
import './index.scss'

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <SideBar />
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;

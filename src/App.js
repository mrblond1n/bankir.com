import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SideBar from './components/layouts/SideBar';
import Main from './components/layouts/Main';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <SideBar />
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;

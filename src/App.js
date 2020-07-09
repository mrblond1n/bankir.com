import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SideBar from './components/layouts/SideBar';
import Main from './components/layouts/Main';
import './index.scss'

import MomentUtils from '@date-io/moment';

import {
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

function App() {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <BrowserRouter>
        <div className="wrapper">
          <SideBar />
          <Main />
        </div>
      </BrowserRouter>
    </MuiPickersUtilsProvider>
  );
}

export default App;

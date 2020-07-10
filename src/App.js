import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SideBar from './layouts/SideBar';
import Main from './layouts/Content';
import './index.scss'

import MomentUtils from '@date-io/moment';

import {
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { Grid } from '@material-ui/core';

function App() {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <BrowserRouter>
        <Grid container>
          <Grid item md={2}>
            <SideBar />
          </Grid>
          <Grid item xs={12} md={10}>
            <Main />
          </Grid>
        </Grid>
      </BrowserRouter>
    </MuiPickersUtilsProvider>
  );
}

export default App;

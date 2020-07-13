
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './index.scss'
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';


import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Header from './layouts/Header';
import Main from './layouts/Content';
import SideBar from './layouts/SideBar';

const drawerWidth = 160;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    width: '100%'
  },
}));

export default function App() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <div className={classes.root}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <BrowserRouter>
          <CssBaseline />
          <Header handleDrawerToggle={handleDrawerToggle} classes={classes} />
          <SideBar classes={classes} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
          <Main classes={classes} />
        </BrowserRouter>
      </MuiPickersUtilsProvider>
    </div>
  );
}

App.propTypes = {
  window: PropTypes.func,
};


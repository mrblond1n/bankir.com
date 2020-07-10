import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { SIGNIN, SIGNUP, HOME, SETTINGS, ADD_EVENT } from '../constants/routes';
import Logo from '../components/Logo'

import PropTypes from 'prop-types';
import MenuIcon from '@material-ui/icons/Menu';
import {
  List, Divider, ListItem, makeStyles, ListItemText, useTheme,
  Toolbar, Typography, AppBar, CssBaseline, Drawer, Hidden, IconButton,
} from "@material-ui/core";
import { signOut } from '../store/actions/authActions';

const drawerWidth = 180;

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
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const signedInLinks = [
    { type: 'link', title: 'Главная', link: HOME },
    { type: 'link', title: 'Добавить', link: ADD_EVENT },
    { type: 'link', title: 'Настройки', link: SETTINGS },
    { type: 'action', title: 'Выход', link: SIGNIN, handler: signOut }
  ]
  const signedOutLinks = [
    { type: 'link', title: 'Авторизация', link: SIGNIN },
    { type: 'link', title: 'Регистрация', link: SIGNUP }
  ]
  const auth = useSelector(state => state.firebase.auth)
  const links = auth.uid ? signedInLinks : signedOutLinks
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Logo />
      <Divider />
      <List color="error">
        {links.map(({ link, title, type }) => (
          <ListItem
            exact
            button
            component={NavLink}
            key={link}
            to={link}
            className="nav__link"
          >
            <ListItemText primary={title} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {/* Responsive drawer */}
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container} variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{ paper: classes.drawerPaper }}
            ModalProps={{ keepMounted: true }} // Better open performance on mobile.
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
import React from 'react';
import { NavLink } from 'react-router-dom';

import { List, Divider, ListItem, ListItemText, Drawer, Hidden, useTheme } from "@material-ui/core";
import { SIGNIN, SIGNUP, HOME, SETTINGS, ADD_EVENT } from '../constants/routes';
import Logo from '../components/Logo'
import { signOut } from '../store/actions/authActions';
import { useSelector, useDispatch } from 'react-redux';

export default function SideBar(props) {
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
  const dispatch = useDispatch();
  const auth = useSelector(state => state.firebase.auth)
  const links = auth.uid ? signedInLinks : signedOutLinks
  const { window } = props;
  const { classes, mobileOpen, handleDrawerToggle } = props;
  const theme = useTheme();
  const container = window !== undefined ? () => window().document.body : undefined;
  const drawer = (
    <div>
      <Divider />
      <Logo className={classes.toolbar} />
      <Divider />
      <List color="error">
        {links.map(({ link, title, type, handler }) =>
          type === 'link' ?
            <ListItem exact button component={NavLink} key={link} to={link} className="nav__link">
              <ListItemText primary={title} />
            </ListItem> :
            <ListItem button key={link} className="nav__link" onClick={() => dispatch(handler())}>
              <ListItemText primary={title} />
            </ListItem>
        )}
      </List>
    </div>
  );
  return <nav className={classes.drawer} aria-label="mailbox folders">
    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
    <Hidden smUp implementation="css">
      <Drawer
        container={container}
        variant="temporary"
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
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
}
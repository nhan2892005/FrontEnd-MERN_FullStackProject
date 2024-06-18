import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button, Tooltip } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import memories from '../../images/memories.png';
import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();
  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);
  if (user?.result?.name) {
    user.name = user.result.name;
  }
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Enjoy the Moments</Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </div>
      <Toolbar className={classes.toolbar}>
        {user?.name ? (
          <div className={classes.profile}>
            <Tooltip title={user?.name || ''} arrow>
              <Avatar className={classes.purple} alt={user?.name} src={user?.picture}>{user?.name.charAt(0)}</Avatar>
            </Tooltip>
            <Typography className={classes.userName} variant="h6">{user?.name}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Log out</Button>
          </div>
        ) : (
          <Button className={classes.button} component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
          // <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Log out</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

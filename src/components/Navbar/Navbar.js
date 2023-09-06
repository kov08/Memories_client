import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import decode from 'jwt-decode';

import useStyles from './styles';
import memories from '../../assets/images/memories.png';
import { useDispatch } from 'react-redux';


const Navbar = () => {
  // console.log("Sucess2!")
  const classes = useStyles();

  // const user = null;
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  console.log(user);
  
  const history = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: 'LOGOUT' });

    history("/");
    setUser(null);
  }
  
  useEffect(() => {
    const token = user?.token;

    if(token) {
      const decodedToken = decode(token);

      if(decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
        
    setUser(JSON.parse(localStorage.getItem('profile')))
  },  [location]);


    return (
      <AppBar className={classes.appBar} position="static" color="inherit">
        <div>
          <Typography className={classes.heading} variant="h2" align="center">Memories
          </Typography>
          <img  className={classes.image} src={memories} alt="memories" height="60" />
        </div>        
        <Toolbar className={classes.toolbar}>
          {user ? (
            <div className={classes.profile}>
              <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}> {user.result.name.charAt(0)} </Avatar>
              <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
              <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}> Logout</Button>
            </div>
          ):(
            <Button component={Link} to="/auth" variant="contained" color="primary" >Sign-In</Button>
            )}
        </Toolbar>
      </AppBar>

)
}

export default Navbar
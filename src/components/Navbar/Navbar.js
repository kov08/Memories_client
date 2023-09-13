import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import decode from 'jwt-decode';

import useStyles from './styles';
import memoriesLogo from '../../assets/images/memoriesLogo.png';
import memoriesText from '../../assets/images/memoriesText.png';
import { useDispatch } from 'react-redux';


const Navbar = () => {
  // console.log("Sucess2!")
  const classes = useStyles();

  // const user = null;
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  // console.log(user);
  
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
      console.log("Decoded token Expiry: ", decodedToken.exp);
      if(decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
        
    setUser(JSON.parse(localStorage.getItem('profile')))
  // },  [location]);
  },  [location, user?.token]);


    return (
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Link to="/" className={classes.brandContainer}>
          <img src={memoriesText} alt="icon" height="40 px" />
          <img className={classes.image} src={memoriesLogo} alt="icon" height="45px" />
        </Link>        
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
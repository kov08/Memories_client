import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { GoogleLogin } from 'react-google-login';

import useStyles from './styles';
import Input from './Input';
import Icon from './icon';
import { useDispatch } from 'react-redux';


const Auth = () => {
//   console.log("This works")
    const classes = useStyles();
    
    const [showPassword,setShowPassword] = useState(false);
    
    const handleShowPassword =() => setShowPassword((prevShowpassword) => !prevShowpassword)

    const [isSignup, setIsSignup] = useState(false);
    // const isSignup = true;

    const handleSubmit = () => {

    }

    const handleChange = () => {

    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false)
    }
     // It has a bug that enable show password alteratively for ex. if show password is disabled on sign up page it will be enabled automatically on sign in page.
     const dispatch = useDispatch();
     const googleSuccess = async (res) =>{
        const result = res?.profileObj;
        const token = res?.tokenId;
        try {
            dispatch({ type : 'AUTH', data : { result, token }});
        } catch (error) {
            console.error();
        }
     }
     const googleFailure = (error) =>{
        console.error();   
        console.log('Google Sign In was unsuccessful, Try aagin later!');
     }

    return (
       
        <Container component="main" maxWidth="xs" >
            <Paper className={classes.Paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5"> {isSignup ? 'Sign Up' : 'Sign In'} </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="firstName" label="First Name" handleChange={handleChange} half />
                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/> }   
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <GoogleLogin
                        clientId="443346190390-dck3tqtjhglckut0lpull5um6hvo82p8.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained" >
                                Google Sign In
                            </Button>
                        )} 
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            cookiePolicy="single_host_origin"
                    />
                    <Grid container justifyContent="flex-end">
                        <Button onClick={switchMode}>
                            { isSignup ? 'Already have an account? Sign In' : 'Dont have an account? Sign Up'}
                        </Button>

                    </Grid>
                </form>
            </Paper>
        </Container>
       
  )
}

export default Auth;
import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import { GoogleLogin } from 'react-google-login';
//  From google website 2nd trial: 2.0
// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

import useStyles from './styles';
import Input from './Input';
// import Icon from './icon';
import { useDispatch } from 'react-redux';
import { signin, signup } from '../../actions/auth';


// Work under MY login button implementation : 3.0
import { useEffect } from 'react';
import Login from './login';
import { gapi } from 'gapi-script';
import { useNavigate } from 'react-router-dom';




const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: ''}

const Auth = () => {
//   console.log("This works")
    const clientId="185487198676-iqa8ukbhcjq9612ejquh2m5vsr0d37nc.apps.googleusercontent.com";
    const classes = useStyles();
    const history = useNavigate();
    
    const [showPassword,setShowPassword] = useState(false);
    const [formData, setFormData] = useState(initialState);
    
    const handleShowPassword =() => setShowPassword((prevShowpassword) => !prevShowpassword)

    const [isSignup, setIsSignup] = useState(false);
    // const isSignup = true;

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formData);

        if (isSignup){
            dispatch(signup(formData, history));
        } else {
            dispatch(signin(formData, history));            
        }
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})

    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false)
    }
     // It has a bug that enable show password alteratively for ex. if show password is disabled on sign up page it will be enabled automatically on sign in page.


     const dispatch = useDispatch();
    
    //  Under MY loin implementation: 3.0
    //  const googleSuccess = async (res) =>{
    //     const result = res?.profileObj;
    //     const token = res?.tokenId;
    //     try {
    //         dispatch({ type : 'AUTH', data : { result, token }});
    //     } catch (error) {
    //         console.error();
    //     }
    //  }
    //  const googleFailure = (error) =>{
    //     console.log(error);   
    //     console.log('Google Sign In was unsuccessful, Try aagin later!');
    //  }

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId,
                scope:""
            })
        };
        gapi.load('client:auth2', start);
    });

    // Google api switch to get access token if using different api
    // var accessToken = gapi.auth.getTocken().access_token;

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
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half />
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

{/* My Implementation of Button with updated version of google oauth: 3.0 */}
                    <Login />
                    
{/* =================================================================================== */}
                    {/* Showcased in video */}
                    {/* <GoogleLogin
                        clientId="443346190390-dck3tqtjhglckut0lpull5um6hvo82p8.apps.googleusercontent.com"                        
                        render={(renderProps) => (
                            <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained" >
                                Google Sign In
                            </Button>
                        )} 
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            cookiePolicy="single_host_origin"
                    /> */}
{/* =================================================================================== */}
                    {/* New UPdated authentication provider : not working!!! : 2.0
                    <GoogleOAuthProvider clientId='443346190390-dck3tqtjhglckut0lpull5um6hvo82p8.apps.googleusercontent.com'>

                    <GoogleLogin
                        // clientId="443346190390-dck3tqtjhglckut0lpull5um6hvo82p8.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained" >
                                Google Sign In
                            </Button>
                        )} 
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                        />
              
                    </GoogleOAuthProvider> */}
{/* =================================================================================== */}

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
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
// import useStyles from './styles';
// import Icon from './icon';
// import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';




function Login() {
    const clientId="185487198676-iqa8ukbhcjq9612ejquh2m5vsr0d37nc.apps.googleusercontent.com";
    
    // const classes = useStyles();
    const dispatch = useDispatch();
    const history = useNavigate();

    const googleSuccess = async (res) => {            
        const result = res?.profileObj;
        const token = res?.tokenId;
        try {
            dispatch({ type : 'AUTH', data : { result, token }});
            history("/");
        } catch (error) {
            console.error();
        }
     }
     const googleFailure = (error) =>{
        // console.log(error);   
        console.log('Google Sign In was unsuccessful, Try aagin later!: ', error);
     }

    return(
        <div id = 'logInButton'>
            {/* <Button className={classes.googleButton}>  */}
                <GoogleLogin                                
                    clientId={clientId}
                    buttonText=" Google Sign In"
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            {/* </Button> */}
        </div>
    )
}

export default Login;
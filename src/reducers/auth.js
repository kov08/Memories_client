import { AUTH, LOGOUT } from "../constants/actionTypes";

const authReducer = (state = {authData : null}, action) => {
    switch (action.type) {
        case AUTH:
           localStorage.setItem('profile', JSON.stringify({ ...action?.data}));
           return { ...state, authData: action?.data} 
        
        // console.log(action?.data);
        //     return state;
            
        default:
            return state;
                
    }
};

export default authReducer;
import App from './App'
import React from 'react'
import { Provider } from 'react-redux';
import { store } from './redux/store';


const AppWrapper = () => {


  return (
    <Provider store={store}>
        <App /> 
    </Provider>
  )
}

export default AppWrapper
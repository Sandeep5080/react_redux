import React from 'react'
import {useDispatch} from  'react-redux';
import { login , logout} from '../features/user';

function Login()  {
    const dispatch = useDispatch();

    return (
        <div>
          <button 
          onClick = {() => {
              dispatch(login( {name: "sandeep", age: 22, email: "sandeep123@gmail.com"})); 
          }}
          >
          
          Login
          
          </button> 
          <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        LOGOUT
      </button> 
        </div>
    )
}

export default Login;


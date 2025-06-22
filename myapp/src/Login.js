import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username , setuserName] = useState("");
    const navigate = useNavigate();

    const handleSubmit=()=>{
        if(username=="admin"){
            navigate('/Dashboard');
        }
        else{
            alert("Invalid Credintials");
        }
    }
    
  return (
    <div className='login'>
        <h1>Login</h1>
        <input type='text' placeholder='Enter your name' onChange={(e)=> setuserName(e.target.value)}></input>
        <button onClick={handleSubmit} style={{marginLeft:'20px'}}>Submit</button>
    </div>
  )
}

export default Login
import React from 'react'

const LoginScreen = ({history}) => {

    const handleLogin = () =>{
        history.push('/')
    }

    return (
        <div>
            <h1>Login</h1>
            <hr/>
            <button className="btn btn-danger" onClick={handleLogin}>Login</button>
        </div>
    )
}

export default LoginScreen

import React, { useState } from 'react'
import Login from './Login'
import Signin from './Signin'

export default function LoginMainComponent() {   
    const [isLogin, setIsLogin] = useState(true)
    return (
        <>
        {
            isLogin 
                ? (<Login />)
                : (<Signin />)
        }
        </>
    )
}

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';

const AuthProvider = ({children}) => {
    const navigate = useNavigate()
    const [token,setToken] = useState(localStorage.getItem('token'))

    useEffect(() => {
        if (!token || token === null ) {
            navigate('/login')
        }
    },[])

    return (
        <>
            {
                children
            }
        </>
    );
}

export default AuthProvider;

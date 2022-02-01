import React, {useEffect, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import {LoggedInContext} from '../contexts/LoggedInContext';

function Logout() {
  const { setIsLoggedIn } = useContext(LoggedInContext)
  const {push} = useHistory()
    useEffect(() => {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        localStorage.removeItem('role')
        setIsLoggedIn(false)
        push('/')
    }, [])
  return <div></div>;
}

export default Logout;

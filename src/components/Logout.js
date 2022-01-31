import React, {useEffect} from 'react';

function Logout() {
    useEffect(() => {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        localStorage.removeItem('role')
    }, [])
  return <div></div>;
}

export default Logout;

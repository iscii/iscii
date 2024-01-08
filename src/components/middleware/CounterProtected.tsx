import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

/** CounterProtected route wrapper
 *  Prevents access to auth pages if already logged in
 */

const CounterProtected = (props) => {
  const currentUser = useContext(AuthContext);

  return currentUser ? <Navigate to='/' replace={true} /> : <>{props.children}</>;
};

export default CounterProtected;
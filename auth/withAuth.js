import React, { useEffect, useState } from 'react';
import config from '../config';
import FirebaseAuth from './signin';

// eslint-disable-next-line react/display-name
const withAuth = Component => props => {

  const [ logged, setLogged ] = useState(false);
  useEffect(() => {
    config.auth().onAuthStateChanged(authUser => {
      if (!authUser) {
        setLogged(false)
      } else {
        setLogged(true)
      }
    });
  }, []);

  return (
    <div>
      {logged &&  <Component {...props} />}
      {!logged && <FirebaseAuth /> }
    </div>
  )
};

export default withAuth;
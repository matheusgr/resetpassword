import React, { useEffect } from 'react';
import router from 'next/router';
import config from '../config';

// eslint-disable-next-line react/display-name
const withAuth = Component => props => {
  useEffect(() => {
    config.auth().onAuthStateChanged(authUser => {
      if (!authUser) {
        router.push('/signin');
      }
    });
  }, []);

  return (
    <div>
      <Component {...props} />
    </div>
  )
};

export default withAuth;
import StyledFirebaseAuth from '../pages/StyledFirebaseAuth';
import config from '../config';
import { setUserCookie } from './userCookie';
import { mapUserData } from './useUser';

const firebaseAuthConfig = ({ signInSuccessUrl }) => ({
  signInFlow: 'popup',
  signInOptions: [
    config.firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  signInSuccessUrl,
  credentialHelper: 'none',
  callbacks: {
    signInSuccessWithAuthResult: async ({ user }, redirectUrl) => {
      const userData = await mapUserData(user);
      setUserCookie(userData);
    }
  }
});

const FirebaseAuth = () => {
  const signInSuccessUrl = "/"
  return (
    <div>
      <StyledFirebaseAuth
        uiConfig={firebaseAuthConfig({ signInSuccessUrl })}
        firebaseAuth={config.firebase.auth()}
        signInSuccessUrl={signInSuccessUrl}
      />
    </div>
  );
};

export default FirebaseAuth;
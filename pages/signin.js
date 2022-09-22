import StyledFirebaseAuth from './StyledFirebaseAuth';
import config from '../config';
import { setUserCookie } from '../auth/userCookie';
import { mapUserData } from '../auth/useUser';

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
  const signInSuccessUrl = "/private"
  return (
    <div>
      <span>xpto</span>
      <StyledFirebaseAuth
        uiConfig={firebaseAuthConfig({ signInSuccessUrl })}
        firebaseAuth={config.firebase.auth()}
        signInSuccessUrl={signInSuccessUrl}
      />
    </div>
  );
};

export default FirebaseAuth;
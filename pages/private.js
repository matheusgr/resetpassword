import { useState } from 'react';
import withAuth from '../auth/withAuth';
import { useUser } from '../auth/useUser';
import config from '../config';

const sendRequest = (setResponse) => {
  config.auth().currentUser.getIdToken(true).then(function(token) {
    const helloUserUrl = window.location.protocol + "//" + window.location.host + '/hello'
    document.cookie = '__session=' + token + ';max-age=3600';
    console.log('Sending request to', helloUserUrl, 'with ID token in __session cookie.');
    let req = new XMLHttpRequest();
    req.onload = function() {
      setResponse(req.responseText);
    };
    req.onerror = function() {
      setResponse('There was an error');
    };
    req.open('GET', helloUserUrl, true);
    req.send();
  });
}


const Private = () => {
  const { user, logout } = useUser();
  const [ response, setResponse ] = useState("");
  return (
    <div >
      <div>Private</div>
      {
        user?.email &&
        <div>
          <button onClick={() => sendRequest(setResponse)}>SEND BUTTON</button>
          { response && <span>{response}</span>}
          <div>Email: {user.email}</div>
          <button onClick={() => logout()}>Logout</button>
        </div> 
      }
    </div>
  )
}

export default withAuth(Private);
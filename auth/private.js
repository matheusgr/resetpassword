import { useState } from 'react';
import withAuth from './withAuth';
import { useUser } from './useUser';
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
    { user?.email && <>
      <div>{user.email}</div>
      <hr />
      <div>
          <button onClick={() => sendRequest(setResponse)}>Resetar Senha LCC</button>
          <div>
            { response && <span>{response}</span>}
          </div>
      </div>
      <hr />
      <div>
          <button onClick={() => logout()}>Logout</button>
      </div>
    </>
    }
    </div>
  )
}

export default withAuth(Private);
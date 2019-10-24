import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Login = () => {
  const [display, setDisplay ] = useState('noAuth');
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  //authenticating the form
  const authenticate = async () => {
    try{
      const user = {
        username, password
      }
      const res = await axios.post('/users/login', user)
      if(res.data.session !== undefined){
        console.log(res.data)
        setDisplay('auth')
      }
    }
    catch(e){
      setError(true)
    }
  }

  //getting session information for persistant data
  const getSession = async() => {
    try {
      const res = await axios.get('/users/sessions')
      if(res.data.session !== undefined){
        setDisplay('auth')
      } else {
        setDisplay('noAuth')
      }
    }
    catch(e){
      console.log(e)
    }
  }

  useEffect(() => {
    getSession()
  }, [])

  return(
    <div>
      {display === 'noAuth'
      ? <div className="new-user">
       <h3>Login</h3>
       {
           error && <p>Username and password are required</p>
         }
         <div className="form-group text-center">
           <label className="sr-only">Username: </label>
           <input type="text"
             required
             className="form-control col-8 "
             onChange={e => setUsername(e.target.value)}
             placeholder='username'
           />
         </div>
         <div className="form-group text-center">
           <label className="sr-only">Username: </label>
           <input type="password"
             required
             className="form-control col-8 "
             onChange={e => setPassword(e.target.value)}
             placeholder='username'
           />
         </div>
         <div className="form-group form-btn">
          <button className="btn btn-primary" onClick={authenticate}>Login</button>
         </div>
         
         <Link to='/sign-up' className="mt-4">Don't Have an Account? Sign Up!</Link>
     </div>
     :
     window.location = '/profile'
      }
    </div>
  );
}

export default Login;
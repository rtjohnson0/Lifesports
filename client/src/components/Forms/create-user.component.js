import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const CreateUser = () => {
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
      const res = await axios.post('/users/sign-up', user)
      if(res.data.session !== undefined){
        console.log(res.data)
        setDisplay('auth')
      }
      window.location = '/login'
    }
    catch(e){
      setError(true);
    }
  }

  //getting session information for persistant data
  const getSession = async() => {
    try {
      const res = await axios.get('/users/sessions')
      if(res.data.session !== undefined){
        console.log(res.data)
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
       <h3>Sign Up</h3>
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
          <button className="btn" onClick={authenticate}>Sign Up</button>
          
         </div>
        <Link to="/login">Already have an account? Log In!</Link>
     </div>
     : <h1>Logged in</h1>
      }
    </div>
  );
}

export default CreateUser;
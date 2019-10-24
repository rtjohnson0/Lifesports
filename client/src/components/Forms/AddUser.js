import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const AddUser = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const authenticate = async () => {
    try{
      const user = {
        username, password
      }
      const res = await axios.post('/users/sign-up', user)
     
        console.log(res.data)
      
      window.location = '/login'
    }
    catch(e){
      setError(true);
    }
  }

  return (
    <div className="new-user">
    <h3>Add User</h3>
       <div>
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
           <label className="sr-only">Password: </label>
           <input type="password"
             required
             className="form-control col-8 "
             onChange={e => setPassword(e.target.value)}
             placeholder='password'
           />
         </div>
         <div className="form-group form-btn">
          <button className="btn" onClick={authenticate}>Sign Up</button>
          
         </div>
        {/* <Link to="/login">Already have an account? Log In!</Link> */}
     </div>
  </div>
 
  )
  
}

export default AddUser;
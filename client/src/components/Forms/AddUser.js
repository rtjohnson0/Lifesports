import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const AddUser = () => {
  const [username, setUsername] = useState();
  const [error, setError] = useState();

  const authenticate = async () => {
    try{
      const res = await axios.post('/users/add', username)
      console.log(res.data)
      window.location = '/login'
    }
    catch(e){
      console.log(e)
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
         {/* <div className="form-group text-center">
           <label className="sr-only">Password: </label>
           <input type="password"
             required
             className="form-control col-8 "
             onChange={e => setPassword(e.target.value)}
             placeholder='password'
           />
         </div> */}
         <div className="form-group form-btn">
          <button className="btn" onClick={authenticate}>Add User</button>
          
         </div>
        {/* <Link to="/login">Already have an account? Log In!</Link> */}
     </div>
  </div>
 
  )
  
}

export default AddUser;
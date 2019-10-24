import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Navbar(props) {

  const {display, setDisplay} = props;

  //delete sessions
  const deleteSessions = async () => {
    try{
      await axios.get('/users/logout');
      setDisplay('auth');
      window.location = '/';
    }catch(e) {
      console.log(e);
    }
  }

  //get session
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

  //calling the current user
  const [user, setUser] = useState([]);

    const fetchUsers = async () => {
        try {
            const res = await fetch('/users/profile');
            const text = await res.text();
            const result = text.length ? JSON.parse(text): {}
            // console.log(result)
            setUser(result)
        } 
        catch(err){
            throw err;
        }
    }

    useEffect(() => {
        fetchUsers()
    }, []);

  //getting current user

  useEffect(() => {
    getSession()
  }, [])

  return (
    <nav className="navbar navbar-expand-lg">
      <Link to="/" className="navbar-brand">LifeSports</Link>
      <div className="collpase navbar-collapse">
      {display === "noAuth" ?
    
      <>
          <ul className="navbar-nav mr-auto">
          
        </ul>
        <Link to='/login'>
          <button className="btn btn-primary">Login</button>
        </Link>
        </>:
        <>
        <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
            
            <Link to="/exercises" className="nav-link">Exercises</Link>
          </li>
          <li className="navbar-item">
          <Link to="/profile" className="nav-link">Profile</Link>
          </li>
          <li className="navbar-item">
          <Link to="/profile" className="nav-link">Profile</Link>
          </li>
          </ul>
          <div>
          <h4> Welcome {user.username} !</h4>
          </div>
          
        <button className="btn btn-primary" onClick={deleteSessions}>Log Out</button>
        </>
      }
      </div>
    </nav>

  );
}
export default Navbar
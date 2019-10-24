import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Navs = (props) =>{
  // const {username} = props;
  function Open(){
    document.getElementById("#mySideBar").style.display="block"

  }
  function Close(){
    document.getElementById("#mySideBar").style.display="none"
  }

  const [user, setUser] = useState([]);

    const fetchUsers = async () => {
        try {
            const res = await axios.get('/exercises/')
            setUser(res.data)
            console.log(res.data[0])
          }
          catch(e){
            console.log(e)
          }
    }

    useEffect(() => {
        fetchUsers()
    }, []);
    return(
<header>

<div className="w3-sidebar bg-dark w3-bar-block w3-collapse w3-animate-left" id="mySideBar">
<button className="w3-bar-item w3-button w3-large w3-hide-large" onClick={Open}>Close &times;</button>
  <h3 className="w3-bar-item text-center text-white" >{user.username}</h3>
  {/* <img src="images/bronnyjames.jpg" alt="Car" width="100%" /> */}
  <hr className="bg-white" />

  <a href="#" className="w3-bar-item text-center text-white">Height</a>
  <a href="#" className="w3-bar-item text-center text-white">5'2”</a>
  <hr className="bg-white" />
  <a href="#" className="w3-bar-item text-center text-white">Age</a>
  <a href="#" className="w3-bar-item text-center text-white">20</a>
  <hr className="bg-white"/>
  <a href="#" className="w3-bar-item text-center text-white">Hometown</a>
  <a href="#" className="w3-bar-item text-center text-white">Charlotte, NC</a>
  <hr className ="bg-white" />
</div>
</header>
    )
}
export default Navs;
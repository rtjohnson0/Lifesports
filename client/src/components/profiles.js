import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navs from './navs'

//get user by id or by username
const Profile = (props) => {
    // const [user, setUser] = useState([]);

    // const fetchUsers = async () => {
    //     try {
    //         const res = await axios.get('/exercises/')
    //         setUser(res)
    //         console.log(res)
    //       }
    //       catch(e){
    //         console.log(e)
    //       }
    // }

    // useEffect(() => {
    //     fetchUsers()
    // }, []);

    return (
        <>
            <div>
                {
                    // user.map(user => {
                    //     return 
                        <Navs />
                        // user={user} username={user.username} key={user._id}/>
                    // })
                }
            </div>
            
            
            <div className="container mr-md-3 w-100">
                <div className="row">

                    <div className="tile">

                        <div className="item youtube">
                        <div className="header"> <i className="fab fa-youtube"></i>Highlights</div>
                        <hr className = "bg-light" />

                        {/* <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop" width="100%" height="20%" >
            <source src="images/Videoback1.mp4" type="video/mp4" />
        </video> */}
                        </div>

                        <div className="dates">
                            <div className="start ">
                                <strong>Signed In</strong> 12:30pm OCT 23 2019
                                <span></span>
                            </div>
                            <div className="ends">
                                <strong>Signed Out</strong> 5:00pm OCT 24 2019
                            </div>
                        </div>
                        <div className="header"> <i className="fas fa-basketball-ball"></i>Basketball</div>

                        <div className="stats">

                            <div>
                                <strong>Points</strong> 
                            </div>

                            <div>
                                <strong>Assists</strong> 
                            </div>

                            <div>
                                <strong>Rebounds</strong> 
                            </div>

                        </div>

                        <div className="stats">

                            <div>
                                <strong>Blocks</strong> 
                            </div>

                            <div>
                                <strong>Steals</strong> 
                            </div>

                            <div>
                                <strong>TO</strong> 
                            </div>

                        </div>

                        <div className="stats">

                            <div>
                                <strong>3PT%</strong> 
                            </div>

                            <div>
                                <strong>FG%</strong> 
                            </div>

                            <div>
                                <strong>FT%</strong> 
                            </div>

                        </div>




                    </div>
                </div>

            </div>



        </>






    )
}

export default Profile
import React from 'react'
import { Link } from 'react-router-dom';
import Nav from './nav'

const Profile = () => {
    return (
        <>
            <Nav />
            <div class="container mr-md-3 w-100">
                <div class="row">
                    <div class="tile">
                        <div class="item youtube">
                        
                        <hr className="bg-light" />

                 <div class="item youtube">
                            <div class="header"> <i class="fab fa-youtube"></i>Highlights</div>
                            <hr className="bg-light" />

                            <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop" width="100%" height="100%" >
                                <source src="images/Videoback1.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div class="dates">
                            <div class="start ">
                                <strong>Signed In</strong> 12:30pm OCT 17 2019
                                <span></span>
                            </div>
                            <div class="ends">
                                <strong>Signed Out</strong> 5:00pm OCT 17 2019
                            </div>
                        </div>
                        <div class="header"> <i class="fas fa-basketball-ball"></i>Basketball</div>

                        <div class="stats">

                            <div>
                                <strong>Points</strong> 70,000
                            </div>

                            <div>
                                <strong>Assists</strong> 3
                            </div>

                            <div>
                                <strong>Rebounds</strong> 40,000
                            </div>

                        </div>

                        <div class="stats">

                            <div>
                                <strong>Blocks</strong> 1,000,000
                            </div>

                            <div>
                                <strong>Steals</strong> 5
                            </div>

                            <div>
                                <strong>TO</strong> 0
                            </div>

                        </div>

                        <div class="stats">

                            <div>
                                <strong>3PT%</strong> 97%
                            </div>

                            <div>
                                <strong>FG%</strong> 98%
                            </div>

                            <div>
                                <strong>FT%</strong> 100%
                            </div>

                        </div>


                    </div>
                </div>

            </div>
        </div>
        </>


    )
}

export default Profile
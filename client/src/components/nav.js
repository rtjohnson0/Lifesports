import React from 'react'
import '../App.css';

const Nav = () => {
  function Open() {
    document.getElementById("#mySideBar").style.display = "block"

  }
  function Close() {
    document.getElementById("#mySideBar").style.display = "none"

  }
  return (

<header>


    <header>

      <div class="w3-sidebar w3-orange w3-bar-block w3-collapse w3-animate-left" id="mySideBar">
        <button class="w3-bar-item w3-button w3-large w3-hide-large" onclick={Open}>Close &times;</button>
        <h3 class="w3-bar-item text-center text-white">Reginald Johnson</h3>
        <img src="images/bronnyjames.jpg" alt="Car" width="100%" />

        <a href="#" class="w3-bar-item text-center text-white">Height</a>
        <a href="#" class="w3-bar-item text-center text-white">5'9</a>
        <hr className="bg-white" />
        <a href="#" class="w3-bar-item text-center text-white">Age</a>
        <a href="#" class="w3-bar-item text-center text-white">22</a>
        <hr className="bg-white" />
        <a href="#" class="w3-bar-item text-center text-white">Hometown</a>
        <a href="#" class="w3-bar-item text-center text-white">Washington D.C.</a>
        <hr className="bg-white" />
      </div>


</header>


    </header>



  )




}
export default Nav;
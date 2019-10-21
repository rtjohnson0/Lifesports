import React from 'react'

const Nav = () =>{
  function Open(){
    document.getElementById("#mySideBar").style.display="block"

  }
  function Close(){
    document.getElementById("#mySideBar").style.display="none"

  }
    return(



<header>

<div class="w3-sidebar w3-black w3-bar-block w3-collapse w3-card w3-animate-left" width="25%" id="mySideBar">
<button class="w3-bar-item w3-button w3-large w3-hide-large" onclick={Open}>Close &times;</button>
  <h3 class="w3-bar-item text-center">Reginald Johnson</h3>
  <img src="images/ReggieMeme.png" alt="Car" width="100%" />

  <a href="#" class="w3-bar-item text-center">Height</a>
  <a href="#" class="w3-bar-item text-center">5'9</a>
  <hr />
  <a href="#" class="w3-bar-item text-center">Age</a>
  <a href="#" class="w3-bar-item text-center">22</a>
  <hr />
  <a href="#" class="w3-bar-item text-center">Hometown</a>
  <a href="#" class="w3-bar-item text-center">Washington D.C.</a>
  <hr />
</div>



</header>



    )




}
export default Nav;
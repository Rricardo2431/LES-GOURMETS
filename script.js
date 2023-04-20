/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "50%";
  document.getElementById("myNav").style.height = "65%"
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  function openNavMap() {
    document.getElementById("myNavMap").style.width = "50%";
  document.getElementById("myNavMap").style.height = "65%"
  }
  
  function closeNavMap() {
    document.getElementById("myNavMap").style.width = "0%";
  }

  
    let siteMusic = document.querySelector("#siteMusic");
    let btnplay = document.querySelector("#btnplay");

    btnplay.onclick = function(){
        if(siteMusic.paused){
            siteMusic.play();
            btnplay.src ="ressources/pause icone.png"
        }else{
           siteMusic.pause();
           btnplay.src = "ressources/play icone.png" 
        }
    }
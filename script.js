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
    document.getElementById("myNavMap").style.width = "100%";
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

    const map = L.map("map").setView([48.868851,2.40604], 15); //Initialisation du point central de la carte

let Stadia_OSMBright = L.tileLayer("https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png", {
	maxZoom: 15,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}); // Initialisation de la carte
Stadia_OSMBright.addTo(map); // Ajout de la carte à la map
let marker = L.marker([48.868851,2.40604],
    {alt: "wildCodeSchool"}).addTo(map) // "WildCodeSchool" nom du marqueur
    .bindPopup("Emplacement WildCodeSchool");

let circle = L.circle([48.868851,2.40604], {
    color: "red",
    fillColor: "#f03",
    fillOpacity: 0.5,
    radius: 450
}).addTo(map); // Ajout du cercle à la map

const elements = document.querySelectorAll('.o_Kyoto'); // sélectionner tous les éléments de la classe "o_Kyoto"

// ajouter un événement "click" à chaque élément sélectionné
elements.forEach(function(element) {
    element.addEventListener('click', function() {
        // le code à exécuter lors du clic sur un élément
        map.flyTo([48.8681033,2.4059388], 18);
        let marker1 = L.marker([48.8681033,2.4059388],
            {alt: "O Kyoto"}).addTo(map) // "O Kyoto" nom du marqueur
            .bindPopup("O Kyoto");
    });});
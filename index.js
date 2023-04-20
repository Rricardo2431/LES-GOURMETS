// <------------------LES GOURMETS----------------->
const searchBtn = document.getElementById("searchButton");
const searchBtn2 = document.getElementById("searchButton2");
const search = document.getElementById("searchText");
const add = document.getElementById("add");
const identifiant = document.getElementById("identifiant");
const closeIdent = document.getElementById("closeIdent");
const verify = document.getElementById("submitVerify");
const formRestaurant = document.getElementById("formRest");

/* <-------------------------------FERMETURE MODAL IDENTIFIANT---------------------> */
closeIdent.addEventListener("click", closeId);
function closeId() {
identifiant.style.display="none";   
}

/* <-------------------------------OUVERTURE MODAL IDENTIFIANT---------------------> */
add.addEventListener("click", displayIdent);

function displayIdent() {

identifiant.style.display="block";
verify.addEventListener("click", verifyId);

function verifyId(event){
    event.preventDefault();
    const id = document.getElementById("id");
    const mdp = document.getElementById("mdp");
    if(id.value === "admin" && mdp.value === "admin"){
    closeId();
        formRestaurant.style.display="block";
        id.value = "";
        mdp.value = "";
    }else{
        closeId(); 
        alert("Allez va labas t'es meme pas admin!!");
        id.value = "";
        mdp.value = ""; }
}
    
}


/* <-------------------------------PARTIE ADMINISTRATEUR---------------------> */
const form = document.querySelector(".formAdmin");
const nameG = document.querySelector(".name");
let nameAd = document.getElementById("nameAdmin");
const prixG = document.querySelector(".price");
const prixAd = document.getElementById("prixAdmin");
const noteG = document.querySelector(".note");
const noteAd = document.getElementById("noteAdmin");
const submitBtn = document.getElementById("submitAdmin");
const themeAd = document.getElementById("themeAdmin");
const gpsAd = document.getElementById("gpsAdmin");
const section = document.getElementById("restaurantListe");
const restaurant = {
  name: "",
  price: "",
  note: "",
  theme: "",
  gps: ""
};

const arrayRestaurant = [];
submitBtn.addEventListener("click", addR);
/* <-------------------------------DONNEE DU FORM DANS TABLEAU D'OBJET---------------------> */
function addR(event) {
    event.preventDefault();
  console.log("Etape 9");
  submitBtn.style.backgroundColor = "green";
  restaurant.name = nameAd.value;
  restaurant.price = prixAd.value;
  restaurant.note = noteAd.value;
  restaurant.theme = themeAd.value;
  restaurant.gps = gpsAd.value;

  arrayRestaurant.push(restaurant);
  console.log(arrayRestaurant);

  const articleRestau = document.createElement("article");

  const showRestau = document.createElement("div");
  showRestau.classList.add("imageAndMap");
  articleRestau.appendChild(showRestau);

  const description = document.createElement("div");
  description.classList.add("description");
  /* <-------------------------------CREATION ET POSITIONNEMENT DIV NAME---------------------> */
  const nameRestaurant = document.createElement("div");
  nameRestaurant.classList.add(".name")
  nameRestaurant.innerHTML=restaurant.name;
  description.appendChild(nameRestaurant);
/* <-------------------------------CREATION ET POSITIONNEMENT DIV ---------------------> */
  articleRestau.appendChild(description);/*mettre la description dans la section*/
  section.appendChild(articleRestau);/*mettre la section en dernier apres avoir tout mis dedans*/
}

function closeForm (){
    formRestaurant.style.display="block";
    console.log(arrayRestaurant);
}
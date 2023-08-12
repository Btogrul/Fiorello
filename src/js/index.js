const search_button = document.getElementById("srch-button");
const search_form = document.getElementById("search-form");

search_button.addEventListener("click", () => {
    search_form.classList.toggle("activeForm");
} )

console.log(search_button);


// header form search bar end ================


// brger btn 

let burger_btn = document.querySelector("#burger_btn");
let navbar = document.querySelector("#nav-bar");
let close_btn = document.querySelector(".close_button")

burger_btn.addEventListener("click", () => navbar.classList.add("active"))


close_btn.addEventListener("click", () =>navbar.classList.remove("active"))

// brger btn end



// fixed header turn on & off 

window.onscroll = function() {myFunction()};

var header = document.getElementById("fx-header");
var fixed = header.offsetTop;

function myFunction() {

    // window.pageYOffset > header.offsetTop? header.classList.add("fixed"): header.classList.remove("fixed");
    let scroll = window.pageYOffset;
    scroll >= 200? header.classList.add("fixed"): header.classList.remove("fixed");
  
}


// fixed header turn on & off 


// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("play-video-btn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let navbar = document.querySelector(".navbar")
let searchBox = document.querySelector(".search-box .fSearch")
searchBox.addEventListener("click",()=> {
    navbar.classList.toggle("showInput")
    if (navbar.classList.contains("showInput")){
        searchBox.classList.replace ("fa-magnifying-glass","fa-xmark")
    }
    else {
        searchBox.classList.replace ("fa-xmark","fa-magnifying-glass")
    }
})
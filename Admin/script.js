// dark mode toggle
const modeToggle = document.querySelector(".switch");
modeToggle.addEventListener("click",()=> {
    const body = document.querySelector("body");
    body.classList.toggle("dark");
})

// sidebar toggle
const menu = document.querySelector(".menu");
menu.addEventListener("click",()=> {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("close");
})

// table heading icon toggle
const tableHeading = document.querySelectorAll("th");
tableHeading.forEach((element) =>{
    element.addEventListener("click",
    ()=> {
        // to remove all existing active
        const tableHeading2 = document.querySelectorAll("th");
        tableHeading2.forEach((element2)=>{
            if (element2.classList.contains("active")) {
                element2.classList.remove("active")
            }     
        })
// add active class when clicked
        element.classList.add("active")
    })
})

// 

const selectBtn = document.querySelector(".select-btn");

selectBtn.addEventListener("click",()=>{
    const selectMenu = document.querySelector(".select-menu");
    selectMenu.classList.toggle("open");
})



const selectMenu = document.querySelector(".select-menu");
const selectBtn = document.querySelector(".select-btn");

selectBtn.addEventListener("click",()=>{
    selectMenu.classList.toggle("open");
})
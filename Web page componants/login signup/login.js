const form = document.querySelector(".form")
const pwShowHide = document.querySelector(".eye-icon")



pwShowHide.addEventListener("click",()=>{
    let pwField = pwShowHide.parentElement.querySelector(".password")
    if (pwField.type === "password") {
        pwField.type = "text"
        pwShowHide.classList.replace("fa-eye-slash","fa-eye")
    }
    else {
        pwField.type = "password"
        pwShowHide.classList.replace("fa-eye","fa-eye-slash")
    }
})



let accordianContent = document.querySelectorAll(".accordian-content")

accordianContent.forEach((item,index)=>{
    let header = item.querySelector("header")
    header.addEventListener("click",()=>{
        item.classList.toggle("open");

        
        let description = item.querySelector(".description");
        let icon = item.querySelector("i");
        if (item.classList.contains("open")){
            description.style.height =`${description.scrollHeight}px`;
            icon.classList.replace("fa-plus","fa-minus")

        }
        else {
            description.style.height ="0px";
            icon.classList.replace("fa-minus","fa-plus")
        }

        removeOpen(index)
    })
})

function removeOpen(index1) {
    accordianContent.forEach((item2,index2)=>{
        if (index2 != index1) {
            item2.classList.remove("open")

            let description2 = item2.querySelector(".description")
            let icon2 = item2.querySelector("i");
            description2.style.height = "0px";
            icon2.classList.replace("fa-minus","fa-plus")
        }
    })
}
"use strict"


let bulb = document.querySelector(".fa-regular");
let background = document.querySelector("body")


bulb.addEventListener("click", function () {

   background.classList.toggle("active")

})

let ul = document.querySelector("ul");


document.querySelector(".btn").addEventListener("click", function () {

    let input = document.querySelector(".input-text");
    let text = input.value;

    if(text.trim() == ""){
        document.querySelector(".validation").classList.remove("d-none")
        return;

    }else{
        document.querySelector(".validation").classList.add("d-none");
    }


    let li = document.createElement("li");
    let icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-delete-left")
    li.classList.add("list-group-item", "append-li");
    li.innerText = text;
    ul.append(li);
    li.append(icon);


    icon.addEventListener("click", function () {
        
   ul.removeChild(li)
    })

    input.value = "";
    
})
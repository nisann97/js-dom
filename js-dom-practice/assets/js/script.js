"use strict";

// let data = {id: 1, name: "test"};

// data.surname = "salam";

// console.log(data);

let student = { id: 1, name: "Nisa" };

student.surname = "Narimanova";

// console.log(student);


let name = "Ilham";

// let result = [...name];

// console.log(result);

// let nums1 = [1,2,3,4,5];

// let nums2 = [100,200,300]

// let result = [...nums1, ...nums2];
// console.log(result);

// function showNums(...numbers){

//     numbers.forEach(element => {
//         console.log(element)

//     });
// }

// showNums(1,2,3,4,5);


let h1 = document.getElementsByTagName("h1");

// console.log(h1);

// let elems = document.getElementsByClassName("test");

// console.log(elems);

// for (const item of elems) {
//     console.log(item);
// }

// let id = document.getElementById("salam");
// console.log(id);


// let elem = document.querySelector("h1");

// console.log(elem);

// let elems = document.querySelectorAll("h1");

// for (const item of elems) {
//     console.log(item)
// }

// let elem = document.querySelector(".text");


// console.log(elem.innerText);

// console.log(elem.innerHTML)


// elem.innerText = "salamlar";
// elem.innerHTML = "<h1>salamlar<h1>"

// elem.style.color = "red";

// elem.style.backgroundColor="blue";
// elem.style.padding = "50px";

// elem.className = "salam";


// let div = document.querySelector(".text");

// // div.className = "salam";

// div.classList.add("salam");

// div.classList.remove("test2");
// // div.classList.remove("salam");

// if(div.classList.contains("salam")){
//     div.classList.remove("salam")
// };

// let btn = document.querySelector(".add");

// btn.onclick = function(){
//     alert("salamlar");
// }

// btn.onclick = function(){
//     alert("necesiniz?")
// }


// btn.addEventListener("click", function(){
//     alert("salamlar")
// });

// btn.addEventListener("click", function(){
//     alert("necesiniz?")
// })


// let firstElem = document.querySelector(".first");
// let secondElem = document.querySelector(".second");
// let box = document.querySelector(".text")


// firstElem.addEventListener("click", function(){
//     alert("First Elem");
// })

// secondElem.addEventListener("click", function(){
//     alert("Second Elem");
// })

// firstElem.addEventListener("click", function(){
//     box.style.backgroundColor = "blue"
// });

// secondElem.addEventListener("click", function(){
//     box.style.backgroundColor = "yellow"
// });

// firstElem.addEventListener("click", function(){

//     if(!box.classList.contains("first-color")){
//         box.classList.add("first-color")
//         box.classList.remove("second-color")
//     }

// })

// secondElem.addEventListener("click", function(){

//     if(!box.classList.add("second-color"))
//     box.classList.add("second-color")
//     box.classList.remove("first-color")
// })

let ul = document.querySelector("ul")

console.log(ul)

document.querySelector(".add").addEventListener("click", function(){
   
   let input = document.querySelector(".input-text");
   let text = input.value;
   if(text.trim() == ""){
    document.querySelector(".validation").classList.remove("d-none")
    return;
}else{
    document.querySelector(".validation").classList.add("d-none");
}
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.innerText = text;
    ul.append(li);
    
input.value = "";
})
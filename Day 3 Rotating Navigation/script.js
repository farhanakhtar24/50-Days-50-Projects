const openbtn = document.querySelector("#open");
const closebtn = document.querySelector("#close");
const container = document.querySelector(".container");
const navUlLi = document.querySelectorAll(".nav-ul li");

// console.log(navUlLi);

openbtn.addEventListener("click", function () {
    container.classList.add("show-nav");
    navUlLi.forEach((li) => {
        li.classList.add("transition-class")
    })
})

closebtn.addEventListener("click", function () {
    container.classList.remove("show-nav");
    navUlLi.forEach((li) => {
        li.classList.remove("transition-class")
    })
})

// console.log(openbtn);
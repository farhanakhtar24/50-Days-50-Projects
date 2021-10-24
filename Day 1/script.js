
// BRUTE FORCE APPROACH
// const removeActiveClasses = function () {
//     panels.forEach((panel) => {
//         panel.classList.remove("active");
//     })
// }

// panels.forEach((panel) => {
//     panel.addEventListener("click", function () {
//         removeActiveClasses();
//         panel.classList.add("active");
//     })
// })

// Using Event delegation 

const main_container = document.querySelector(".container-main");
const panels = document.querySelectorAll(".panel");


main_container.addEventListener("click", function (panel) {

    // Matching Strategy 
    const clicked = panel.target.closest(".panel");
    if (clicked) {
        panels.forEach((eachPanel) => eachPanel.classList.remove("active"));
        clicked.classList.add("active");
    }
})


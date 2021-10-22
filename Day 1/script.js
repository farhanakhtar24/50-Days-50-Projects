const panels = document.querySelectorAll(".panel");

const removeActiveClasses = function () {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    })
}

panels.forEach((panel) => {
    panel.addEventListener("click", function (element) {
        removeActiveClasses();
        element.target.classList.add("active");
    })
})


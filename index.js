const observer = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    })
})

const hiddenElements = document.querySelectorAll(".section");
hiddenElements.forEach((e1) => observer.observe(e1));
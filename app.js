const btns = document.querySelectorAll(".tab-btn");
const article = document.querySelectorAll(".content");
const about = document.querySelector(".about");

btns.forEach((btn) => {
    btn.addEventListener("click", function(e) {
        const tap = e.currentTarget.dataset.id;
        if (tap) {
            tap.classList.remove("active");
            e.currentTarget.classList.add("active");
            article.forEach((art) => {
                art.classList.remove("active");
            })
            const element = document.getElementById(tap);
            element.classList.add("active");
        }
    })
})

/*about.addEventListener("click", function(e) {
    const id = e.target.dataset.id;
    if (id) {
        btns.forEach((btn) => {
            btn.classList.remove("active");
        });
        e.target.classList.add("active");
        article.forEach(function (article) {
            article.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
})
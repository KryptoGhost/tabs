const btns = document.querySelectorAll(".tab-btn");
const article = document.querySelectorAll(".content");
const about = document.querySelector(".about");

btns.forEach((btn) => {
    btn.addEventListener("click", function(e) {
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
});

/*about.addEventListener("click", function(e) {
    const id = e.target.dataset.id; //tagetet the buttons with their data attribute
    console.log(id);
    if (id) {
        btns.forEach((btn) => {
            btn.classList.remove("active"); // remove the active class
        });
        e.target.classList.add("active"); // add active to selected button
        article.forEach(function (article) {
            article.classList.remove("active"); //remove the active class
        });
        //target any aspect with the id name 
        const element = document.getElementById(id); 
        element.classList.add("active");
    }
});*/
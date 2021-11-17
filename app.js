const navSLide = () => {
    const sandwich = document.querySelector(".burger");
    const nav = document.querySelector('.nav-links');


    sandwich.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}

navSLide();
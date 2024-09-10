function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");


    // when we click it will apply or remove the 'open' class in css
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
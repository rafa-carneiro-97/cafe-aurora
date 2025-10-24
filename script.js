// trecho de codigo que lida com o menu-burguer

document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

        });
    });

});

// trecho de codigo que lida com o tema da pagina

const btn = document.getElementById('toggleTheme');
const icon = document.querySelector('#themeIcon i');

btn.addEventListener('click', () => {
    
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';

    if (isDark) {

        // Tema claro
        html.setAttribute('data-theme', 'light');
        icon.classList.replace('fa-moon', 'fa-sun');
        btn.classList.remove('button-theme-moon');
        btn.classList.add('button-theme-sun');

    } else {

        // Tema escuro
        html.setAttribute('data-theme', 'dark');
        icon.classList.replace('fa-sun', 'fa-moon');
        btn.classList.remove('button-theme-sun');
        btn.classList.add('button-theme-moon');

    }
});

// trecho de codigo que lida com a cor do navbar com scroll

document.addEventListener("scroll", function () {
    const navbar = document.getElementById("mainNavbar");
    if (window.scrollY > 10) {
        navbar.classList.add("is-scrolled");
    } else {
        navbar.classList.remove("is-scrolled");
    }
});

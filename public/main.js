(function() {
    const nav = document.querySelector('.navbar');
    const input = document.querySelector('.responsive');

    input.addEventListener("click", () => {
        nav.classList.toggle('nav-enabled');
    });
})();
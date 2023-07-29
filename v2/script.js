    // Script para exibir/ocultar o menu hamburguer
    document.getElementById("menuButton").addEventListener("click", function() {
        var menuLinks = document.getElementById("menuLinks");
        if (menuLinks.classList.contains("d-none")) {
            menuLinks.classList.remove("d-none");
        } else {
            menuLinks.classList.add("d-none");
        }
    });

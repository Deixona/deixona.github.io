// scripts.js
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

// Añadimos una comprobación por seguridad
if (btn && menu) {
    btn.addEventListener("click", () => {
        menu.classList.toggle("mostrar");
        console.log("Menú activado desde archivo externo");
    });
}
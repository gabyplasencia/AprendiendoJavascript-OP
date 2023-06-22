//Vincula un evento de tipo "click" al botón anterior, que muestre una alerta en el navegador "click en el botón"
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => alert("Se ha hecho click"));

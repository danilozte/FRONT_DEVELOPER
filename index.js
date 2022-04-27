const button1 = document.getElementById("entrada1");
const button2 = document.getElementById("entrada2");
const button3 = document.getElementById("entrada3");

console.log(button1);

button1.addEventListener("click", () => {
  document.getElementById("info_int").innerHTML =
    "Hilo metálico o conjunto de hilos que sirve como conductor; puede tener una envoltura aislante.";
  document.getElementById("image1").src =
    "https://electricasjomaga.com/wp-content/uploads/2020/07/cables-electricos.jpg";
});
button2.addEventListener("click", () => {
  document.getElementById("info_int").innerHTML =
    "Pieza metálica cilíndrica o cónica, con un resalte helicoidal que la recorre total o parcialmente y una cabeza con una ranura para alojar la pala del destornillador, que sirve para sujetar una cosa a otra.";
  document.getElementById("image1").src = "https://m.media-amazon.com/images/I/61DnX8n7G9L._AC_SY355_.jpg";
});
button3.addEventListener("click", () => {
  document.getElementById("info_int").innerHTML = "Lámpara, generalmente dirigible, que emite una luz muy intensa.";
  document.getElementById("image1").src =
    "https://www.guialed.com/wp-content/uploads/2019/10/selecciondefocosled-2-800x600.png";
});

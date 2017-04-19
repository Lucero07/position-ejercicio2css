var arregloImagenes = document.getElementsByClassName('imagenes');
console.log(arregloImagenes);
for(var i =0; i<arregloImagenes.length;i++){
  arregloImagenes[i].addEventListener('click', mostrar);
}

function mostrar() {
crearImagen(this);

}
 function crearImagen(elemento){
   var imagenMostrada = elemento.src;
   console.log(imagenMostrada);
 }

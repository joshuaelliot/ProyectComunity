const cardCoverAll= document.querySelectorAll(".card__cover");
const cardContentAll = document.querySelectorAll(".card__content");
const cardContentPrincipal=document.querySelectorAll(".card");
console.log(cardContentAll)
console.log(cardCoverAll)

function agregarEvento(elemento){
    for(let i=0;i<elemento.length;i++){
        elemento[i].addEventListener("mouseover",cambioColor)
        elemento[i].addEventListener("mouseout",function(){
            let descripcion= this.getElementsByClassName("card__content");
            descripcion[0].style.background="red";
        })
    }
}

function cambioColor(){
   let descripcion= this.getElementsByClassName("card__content");
   descripcion[0].style.background="blue";
   console.log(descripcion);
}
agregarEvento(cardContentPrincipal)

console.log("estamos en github pages");
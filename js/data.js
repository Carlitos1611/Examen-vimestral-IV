let list=document.getElementById("lista");
let contenedor=document.getElementById("contenedor");
let formas= [];

list.addEventListener("submit", (event)=>{
    event.preventDefault();
    let data =new FormData(list);
    formas.push({
        texto: data.get("texto"),
        figura: data.get("figura"),
        color: data.get("color"),
    });
    pintar_figuras();
});
const pintar_figuras=()=>{
    content.innerHTML="";
    formas.forEach((e)=>{
        content.insertAdjacentHTML (
            "beforeend",
            '<div class="${e.forma}" style="background:$(e.color)"> $(e.texto)<div/>'
        );
    });
};
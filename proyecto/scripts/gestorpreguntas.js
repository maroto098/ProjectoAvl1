import {UserList} from "./usersList.js";
window.onload = ()=>{
/* */









let str = Cookies.get("usersList");
let userlist = new UserList(str);
let tabla = document.getElementById("table");
let atrasButton = document.getElementById("atras");
let questionsToSave = [];
let pregunta = {texto:"",valor:"",puntuacion:"",estado:"Guardando..."};
let lastStatus = userlist.getQuestions(Cookies.get("userId"));
actualizarTabla(lastStatus );

atrasButton.addEventListener("click",atras);
document.getElementById("grabar").addEventListener("click",primerGrabar);



 document.getElementById("question").addEventListener("blur",()=>{

    pregunta.texto = document.getElementById("question").value;

    habilitaGuardado();

 });
 
 document.getElementById("rad1").addEventListener("click",()=>{

    pregunta.valor = document.getElementById("rad1").value;
    habilitaGuardado();

 });
 document.getElementById("rad2").addEventListener("click",()=>{

    pregunta.valor = document.getElementById("rad2").value;
    habilitaGuardado();

 });
 
 document.getElementById("puntuacion").addEventListener("blur",()=>{

    pregunta.puntuacion = document.getElementById("puntuacion").value;
    habilitaGuardado();

 });


























function getIds(){

    let ids = [];
    
    for (let question of questionsToSave ){
        ids.push(question.texto);
    }

    return ids;
}



function mostrarPregunta(pregunta){
console.log(pregunta);
    let fila = document.createElement("tr");
    let texto = document.createElement("td");
    texto.appendChild(document.createTextNode(pregunta.texto)); 
    fila.appendChild(texto);
    let respuesta = document.createElement("td");
    respuesta.appendChild(document.createTextNode(pregunta.valor)); 
    fila.appendChild(respuesta);
    let puntuacion = document.createElement("td");
    puntuacion.appendChild(document.createTextNode(pregunta.puntuacion)); 
    fila.appendChild(puntuacion);
    let estado = document.createElement("td");
    estado.id = pregunta.texto;
    estado.appendChild(document.createTextNode(pregunta.estado)); 
    fila.appendChild(estado);

    tabla.appendChild(fila);



}
function actualizarTabla(preguntas){

 if(preguntas != undefined){

    for(let pregunt of preguntas){
    mostrarPregunta(pregunt);
        
    }
 }
}

function cambiaEstado(ids, message){
    
    for(id in ids){

        document.getElementById(id).innerHTML = message;

    }


}
function atras(){
 location.replace("./saludo.html");
}  

function habilitaGuardado(){
    if(pregunta.texto != "" && pregunta.valor != "" && pregunta.puntuacion != ""){

        document.getElementById("grabar").removeAttribute("disabled");
     

    }


}




function primerGrabar(){
    questionsToSave.push(pregunta);
    mostrarPregunta(pregunta);
    document.getElementById("grabar").removeEventListener("click",primerGrabar);
    document.getElementById("grabar").addEventListener("click",segundoGrabar);
    document.getElementById("form").reset();

    promesa().then((respuesta)=>{
        guardarPreguntas();
        cambiaEstado(getIds,respuesta);
    })
    .catch((err)=>{
        cambiaEstado(getIds,err);
    })
   
 
}


function promesa(){

    return new Promise((resolve,reject)=>{

        

            setTimeout(resolve("OK"),5000);

        
    

});



}




function segundoGrabar(){

    questionsToSave.push(pregunta);
    mostrarPregunta(pregunta);
    document.getElementById("form").reset();
}
    
function guardarPreguntas(){

    for(let question of questionsToSave){
        userlist.addQuestion(Cookies.get("userId"),question);
    }

    let str = JSON.stringify(userlist.json);
    Cookies.set("usersList",str,{expires: 1});


}


}




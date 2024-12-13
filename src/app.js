/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  let who = ["El vehiculo", "Mi amigo", "El mecanico", "Mi padre"];
  let pronouns = [" ha", " se ha", " esta", " roto"];
  let action = [" perdido", " usado", " caído", " roto"];
  let pronouns2 = [" del", " ha visto", " el", " la"];
  let object = [" llave", " telefono", " mando", " cartera"];
  let when = [
    " antes del trabajo",
    " cuando estaba durmiendo",
    " mientras hacía ejercicio",
    " durante el almuerzo",
    " mientras estaba jugando"
  ];

  let rdm1 = Math.floor(Math.random() * who.length);
  let rdm2 = Math.floor(Math.random() * pronouns.length);
  let rdm3 = Math.floor(Math.random() * action.length);
  let rdm4 = Math.floor(Math.random() * pronouns2.length);
  let rdm5 = Math.floor(Math.random() * object.length);
  let rdm6 = Math.floor(Math.random() * when.length);

  document.querySelector("#excuse").innerHTML =
    who[rdm1] +
    pronouns[rdm2] +
    action[rdm3] +
    pronouns2[rdm4] +
    object[rdm5] +
    when[rdm6];
};
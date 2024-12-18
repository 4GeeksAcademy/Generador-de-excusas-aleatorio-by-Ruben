/* eslint-disable */
import "bootstrap";
import "./style.css";


window.onload = function() {
  // Write your code here
  let who = ["El vehiculo", "Mi amigo", "El mecanico", "Mi padre"];
  let pronouns = ["ha", "se ha", "esta", "roto"];
  let action = ["perdido", "usado", "caído", "roto"];
  let pronouns2 = ["del", "ha visto", "el", "la"];
  let object = ["llave", "telefono", "mando", "cartera"];
  let when = [
    "antes del trabajo",
    "cuando estaba durmiendo",
    "mientras hacía ejercicio",
    "durante el almuerzo",
    "mientras estaba jugando"
  ];

  let indexWho = Math.floor(Math.random() * who.length);
  let indexPronouns = Math.floor(Math.random() * pronouns.length);
  let indexAction = Math.floor(Math.random() * action.length);
  let indexPronoun2 = Math.floor(Math.random() * pronouns2.length);
  let indexObject = Math.floor(Math.random() * object.length);
  let indexWhen = Math.floor(Math.random() * when.length);

  document.querySelector("#excuse").innerHTML = `
    <div class="container mt-5 text-center alert alert-success">
      ${who[indexWho]} ${pronouns[indexPronouns]} ${action[indexAction]} ${pronouns2[indexPronoun2]} ${object[indexObject]} ${when[indexWhen]}
    </div>
  `
};

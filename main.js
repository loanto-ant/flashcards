let lernset;
let display1;
let display2;
let time = 0;
const begriffValue = new Array();
const definitionValue = new Array();
const cards = document.querySelectorAll(".card");
const neuErstellen = document.getElementById("neu_erstellen");

function animation(richtung) {
   if (richtung == "weg") {
      display1 = "none";
      display2 = "block";
      time = 600;
   } else if (richtung == "her") {
      display1 = "flex";
      display2 = "none";
      time = 0;
   }
   cards.forEach((element) => {
      if (richtung == "weg") {
         element.classList.remove("karten_her");
         element.classList.add("karten_weg");
      } else if (richtung == "her") {
         element.classList.remove("karten_weg");
         element.classList.add("karten_her");
      }
      let el = element;
      setTimeout(() => (el.style.display = display1), time);
   });
   setTimeout(() => (neuErstellen.style.display = display2), time);
}

function fertig() {
   const titel = document.getElementById("name").value;
   const beschreibung = document.getElementById("beschreibung").value;
   const bild = document.getElementById("bild").value;
   const begriff = document.querySelectorAll(".begriff");
   const definition = document.querySelectorAll(".definition");
   const vokAnzahl = begriff.length;

   begriff.forEach((element, index) => {
      begriffValue[index] = element.value;
   });
   definition.forEach((element, index) => {
      definitionValue[index] = element.value;
   });

   lernset = [
      {
         titel: titel,
         beschreibung: beschreibung,
         bild: bild,
      },
   ];
   for (let i = 0; i < vokAnzahl; i++) {
      lernset[i + 1] = {
         begriff: begriffValue[i],
         definition: definitionValue[i],
      };
   }
   console.log(lernset);
   animation("her");
   overview();
}
function overview() {
   //Elemente erstellen
   const divEl = document.createElement("div");
   const h4El = document.createElement("h4");
   divEl.classList.add("card");
   h4El.innerText = lernset[0].titel;

   //Elemente einfügen
   const cardsDiv = document.getElementById("cards");
   cardsDiv.appendChild(divEl);
   divEl.appendChild(h4El);
}

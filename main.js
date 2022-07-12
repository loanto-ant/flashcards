function neuesSet() {
   const cards = document.querySelectorAll(".card");
   //cards.shift;
   cards.forEach((element) => {
      element.classList.add("karten_weg");
      let el = element;
      setTimeout(() => (el.style.display = "none"), 1000);
   });
}

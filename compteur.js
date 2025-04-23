
document.addEventListener("DOMContentLoaded", () => {
  const counter = document.getElementById("member-counter");
  // Valeur fictive pour test, à remplacer par appel API si voulu
  let members = 1732;
  counter.innerText = members + " membres";
});

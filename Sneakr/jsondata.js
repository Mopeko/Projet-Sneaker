function displaySneakers(data) {
  const sneakerContainer = document.getElementById('Sneaker');
  if (sneakerContainer && Array.isArray(data) && data.length > 0) {
    data.forEach(sneaker => {
      let sneakerTable = document.createElement("table");
      let lineData = document.createElement("tr");
      let cellData = document.createElement("td");
      let sneakerDiv = document.createElement("div");
      let img = document.createElement("img");
      let Name = document.createElement("p");
      let Price = document.createElement("p");
      let link = document.createElement("a");
      link.setAttribute("href", "pageProduit.html?idS=" + sneaker.id);
      Price.innerHTML = sneaker.attributes.retailPrice + "€";
      Name.innerHTML = sneaker.attributes.name;
      img.src = sneaker.attributes.image.original;
      img.alt = sneaker.attributes.name;
      link.appendChild(img);
      sneakerDiv.appendChild(link);
      sneakerDiv.appendChild(Price);
      sneakerDiv.appendChild(Name);
      cellData.appendChild(sneakerDiv);
      lineData.appendChild(cellData);
      sneakerTable.appendChild(lineData);
      sneakerContainer.appendChild(sneakerTable);
    });
  } else {
    console.log("Aucune donnée à afficher ou élément parent introuvable.");
  }
}



function fetchDataAndDisplay() {
  fetch('all_data.json')
    .then(response => response.json())
    .then(data => {
      displaySneakers(data);
    })
    .catch(error => console.error('Erreur lors de la récupération des données :', error));
}
function displaySneakersP() {
 

}


fetchDataAndDisplay();
window.onload = function () {
  fetchDataAndDisplay();
};

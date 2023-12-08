function displaySneakers(data) {
  const sneakerContainer = document.getElementById('Sneaker');
  if (data != null) {
    data.forEach(sneaker => {
      const sneakerTable = document.createElement("table");
      const lineData = document.createElement("tr");
      const cellData = document.createElement("td");
      let sneakerDiv = document.createElement("div");
      const img = document.createElement("img");
      const Name = document.createElement("p")
      const Price = document.createElement("p")
      const link = document.createElement("a")
      link.setAttribute("href", "pageProduit.html?idS=" + sneaker.id)
      Price.innerHTML = sneaker.attributes.retailPrice + "€"
      Name.innerHTML = sneaker.attributes.name
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
// Récupérer l'ID de la sneaker depuis l'URL
function getSneakerIdFromUrl() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get('idS');
}

function displaySneakerDetails(data, sneakerId) {
  const sneakerGet = document.getElementById('Produit');
  
  if (data != null && sneakerId) {
    const selectedSneaker = data.find(sneaker => sneaker.id === sneakerId);
    
    if (selectedSneaker) {
      const sneakerDiv = document.createElement("div");
      const img = document.createElement("img");
      const Name = document.createElement("p");
      const Price = document.createElement("p");

      const link = document.createElement("a");
      link.setAttribute("href", "pageProduit.html?idS=" + selectedSneaker.id);
      img.src = selectedSneaker.attributes.image.original;
      img.alt = selectedSneaker.attributes.name;
      Name.innerHTML = selectedSneaker.attributes.name;
      Price.innerHTML = selectedSneaker.attributes.retailPrice + "€";

      sneakerDiv.appendChild(link);
      link.appendChild(img);
      sneakerDiv.appendChild(Name);
      sneakerDiv.appendChild(Price);
      sneakerGet.appendChild(sneakerDiv);
    } else {
      sneakerGet.innerHTML = "Sneaker non trouvée.";
    }
  } else {
    sneakerGet.innerHTML = "Aucune donnée disponible.";
  }
}

function fetchDataAndDisplaySneaker() {
  fetch('all_data.json')
    .then(response => response.json())
    .then(data => {
      const sneakerId = getSneakerIdFromUrl();
      displaySneakerDetails(data, sneakerId);
    })
    .catch(error => console.error('Erreur lors de la récupération des données :', error));
}

fetchDataAndDisplaySneaker();
window.onload

fetchDataAndDisplay();
window.onload = function () {
  fetchDataAndDisplay();
};

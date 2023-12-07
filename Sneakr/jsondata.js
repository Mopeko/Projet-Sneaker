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
      let click = document.createElement("a")

      
      Price.innerHTML = sneaker.attributes.retailPrice + "€"
      Name.innerHTML = sneaker.attributes.name
      img.src = sneaker.attributes.image.original;
      img.alt = sneaker.attributes.name;
      click.appendChild(img);
      sneakerDiv.appendChild(click)
      sneakerDiv.appendChild(img)
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
fetchDataAndDisplay();
window.onload = function() {
  fetchDataAndDisplay();
};

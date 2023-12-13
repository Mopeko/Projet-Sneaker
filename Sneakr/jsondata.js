const List = 'wishlist'
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
      let addToCartBtn = document.createElement("button");
      addToCartBtn.textContent = "Ajouter à la wishlist";
      addToCartBtn.addEventListener("click", function() {
        addWishList(List, sneaker.id)
    });
      link.setAttribute("href", "pageProduit.html?idS=" + sneaker.id);
      Price.innerHTML = sneaker.attributes.retailPrice + "€";
      Name.innerHTML = sneaker.attributes.name;
      img.src = sneaker.attributes.image.original;
      img.alt = sneaker.attributes.name;
      link.appendChild(img);
      sneakerDiv.appendChild(link);
      sneakerDiv.appendChild(Price);
      sneakerDiv.appendChild(Name);
      sneakerDiv.appendChild(addToCartBtn);
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
window.onload = function () {
  fetchDataAndDisplay();
};

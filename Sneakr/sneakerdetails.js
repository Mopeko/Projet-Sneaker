 function getSneakerIdFromUrl() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get('idS');
}
 
  function displaySneakerDetails(data, sneakerId) {
    const sneakerGet = document.getElementById("Produit");

  console.log("Data:", data);

    if (data != null && sneakerId) {
      const selectedSneaker = data.find(sneaker => sneaker.id == sneakerId);
      if (selectedSneaker) {
        const sneakerDiv = document.createElement("div");
        const img = document.createElement("img");
        const Name = document.createElement("p");
        const Price = document.createElement("p");
        const Form = document.createElement("p");
        const Story = document.createElement("p");
    
        img.src = selectedSneaker.attributes.image.original;
        img.alt = selectedSneaker.attributes.name;
        Form.innerHTML = "Forme: " + selectedSneaker.attributes.silhouette;
        Story.innerHTML = "Histoire: " + selectedSneaker.attributes.story;
        Name.innerHTML = "Nom: " + selectedSneaker.attributes.name;
        Price.innerHTML = "Prix: " + selectedSneaker.attributes.retailPrice + "€";
        sneakerDiv.appendChild(img);
        sneakerDiv.appendChild(Name);
        sneakerDiv.appendChild(Price);
        sneakerDiv.appendChild(Form);
        sneakerDiv.appendChild(Story);
        sneakerGet.appendChild(sneakerDiv);
      } else {
        sneakerGet.innerHTML = "Sneaker non trouvée.";
      }
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
  
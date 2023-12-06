function displaySneakers(data) {
  if (data != null) {
    let lineData = document.createElement("tr");
    let cellData = document.createElement("td");
    fetch('all_data.json')
      .then(response => response.json())
      .then(data => {
        data.forEach(sneaker => {
          let sneakerTable = document.createElement("table");
          const img = document.createElement("img")
          img.src = sneaker.attributes.image.original
          document.getElementById('Sneaker').appendChild(img);
          let sneakerDiv = document.createElement("div")
          cellData.appendChild(sneakerDiv)
          lineData.appendChild(cellData)
          sneakerTable.appendChild(lineData)
          document.getElementById('Sneaker').appendChild(sneakerTable);
        }
        );
      })
  }
}

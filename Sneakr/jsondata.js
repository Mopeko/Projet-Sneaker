const sneakerList = document.createElement('ul');
document.body.appendChild(sneakerList);

fetch('all_data.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(sneaker => {
      const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${sneaker.attributes.brand} - ${sneaker.attributes.name}</strong> - $${sneaker.attributes.retailPrice}`;
        sneakerList.appendChild(listItem);
      }
    );
  })
  .catch(error => console.error('Error fetching data:', error));

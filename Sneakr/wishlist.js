function addWishList(List, sneakerId) {
    let wishlist = JSON.parse(localStorage.getItem(List)) || [];
    wishlist.push(sneakerId);
    localStorage.setItem(List, JSON.stringify(wishlist));
}

function removeFromWishlist(List, sneakerId) {
    let wishlist = JSON.parse(localStorage.getItem(List)) || [];
    const index = wishlist.indexOf(sneakerId);
    if (index !== -1) {
        wishlist.splice(index, 1);
    }
    localStorage.setItem(List, JSON.stringify(wishlist));
}

function getWishList(List) {
    return JSON.parse(localStorage.getItem(List)) || [];
}

async function fetchDataAndDisplay(id) {
let data = await fetch('all_data.json');
let jsondata = await data.json();
let dataSneaker = jsondata.find(sneaker => sneaker.id === id)
return dataSneaker

  }
function displayWishList() {
  let List = 'wishlist';
  const wishlistItems = getWishList(List);
  const getIdDisplay = document.getElementById('wishList');

  wishlistItems.forEach(sneakerId => {
    const sneaker = fetchDataAndDisplay(sneakerId);

    if (sneaker) {
      const sneakerDiv = document.createElement("div");
      const link = document.createElement("a");
      const img = document.createElement("img");

      img.src = sneaker.attributes.image.original;
      img.alt = sneaker.attributes.name;

      link.href = "pageProduit.html?idS=" + sneaker.id;
      link.appendChild(img);
      sneakerDiv.appendChild(link);
      getIdDisplay.appendChild(sneakerDiv);
    }
  });
}

  window.onload = function () {
    displayWishList();
  };

  
let url = `http://localhost:3000/api/products`;


// Déclaration d' une fonction
function getProducts(){
  fetch(url).then((data) =>
    data.json()
    .then((data) => {

      // Déclaration d'une boucle 
      for (let i = 0; i < data.length; i++){
       console.log(data[i])
        let name = data[i].name;
        let description = data[i].description;
        let imageUrl = data[i].imageUrl;
        let id = data[i]._id;
        let price = data[i].price;
        let alt = data[i].altTxt;


console.log(name);
console.log(price);
console.log(alt);

// Création d'une variable avec le contenu HTML 
let items = `<a href="./product.html?id=${id}">
        <article>
          <img src="${imageUrl}" alt="Lorem ipsum dolor sit amet, Kanap name1">${alt}
          <h3 class="productName">${name}</h3>
          <p class="productDescription">${description}</p>
          <p class="price">${price}€</p>
        </article>
        </a>`;

        // Modification du DOM avec la valeurs de "items". On ajoute un + sinon le contenu sera écrasé à chaque tour de boucle
document.querySelector('.items').innerHTML += items;
// document.getElementById('items).innerHTML 

      }
    }) 
  
  )
}

// Appel de la fonction
getProducts();

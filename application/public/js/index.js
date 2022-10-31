function buildCardsUsingDOMAPI(container, data) {
    let cardDiv = document.createElement("div"); //create div element
   
    cardDiv.addEventListener('click', function(ev) {
        console.log(ev.currentTarget.remove());

        let containerDiv = document.getElementById("product-list");
        let decrement = containerDiv.childElementCount
        console.log(decrement)
    })
   
    cardDiv.setAttribute("class", "product-card"); //set class HTML attribute 

    let imgDiv = document.createElement("img"); //create img element
    imgDiv.setAttribute("src", data.thumbnailUrl); //set src HTML attribute
    imgDiv.setAttribute("class", "prod-img"); //set class HTML attribute

    let infoDiv = document.createElement("div"); //create div element
    infoDiv.setAttribute("class", "prod-info"); //set class HTML attribute

    let titleP = document.createElement("p"); //create p element
    titleP.setAttribute("class", "prod-title"); //set class HTML attribute
    titleP.appendChild(document.createTextNode(data.title)); //adding a text node to the p tag

    infoDiv.appendChild(titleP);
    cardDiv.appendChild(imgDiv);
    cardDiv.appendChild(infoDiv);
    container.appendChild(cardDiv);
}



function fetchPhotos() {
    fetch('https://jsonplaceholder.typicode.com/albums/2/photos')
      .then(response => response.json())

      .then((data) => {
        console.log(data)

        let containerDiv = document.getElementById("product-list");

        let containerFragment = document.createDocumentFragment();

        // get length of array
        let length = data.length
        console.log(length)
        
        data.forEach((photo) => {
            buildCardsUsingDOMAPI(containerFragment, photo);

            console.log(photo.url);
            console.log(photo.title);
        });
        
        //add the container fragment to DOM(the product-list div)
        containerDiv.appendChild(containerFragment);

      })
      .catch((error) => {
        console.log(error);
      });
  }

  fetchPhotos();
  


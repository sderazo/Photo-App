function buildCardsUsingDOMAPI(container, data) {
    let cardDiv = document.createElement("div"); //create div element
    cardDiv.setAttribute("class", "product-card"); //set class HTML attribute 

    let imgDiv = document.createElement("img"); //create img element
    imgDiv.setAttribute("src", data.thumbnail); //set src HTML attribute
    imgDiv.setAttribute("class", "prod-img"); //set class HTML attribute

    let infoDiv = document.createElement("div"); //create div element
    infoDiv.setAttribute("class", "prod-info"); //set class HTML attribute

    let titleP = document.createElement("p"); //create p element
    titleP.setAttribute("class", "prod-title"); //set class HTML attribute
    titleP.appendChild(document.createTextNode(data.title)); //adding a text node to the p tag

    let costP = document.createElement("p");//create p element
    //titleP.setAttribute("class", "prod-title"); //set class HTML attribute
    costP.setAttribute("class", "prod-cost"); //set class HTML attribute
    //titleP.appendChild(document.createTextNode(data.title)); //adding a text node to the p tag
    costP.appendChild(document.createTextNode(data.price)); //adding a text node to the p tag
}



function fetchPhotos() {
    // where we will get products from
    //var url = "https://jsonplaceholder.typicode.com/albums/2/photos";
    fetch("https://jsonplaceholder.typicode.com/albums/2/photos")
      .then(function(response) { 
        //extract the body from response object.
        return response.json();
      })
      .then(function(data) {
        //get the array of products from data json object
        let products = data.albums;
        //get product-list div
        let containerDiv = document.getElementById("product-list");
        //create a document Fragment (https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment)
        let containerFragment = document.createDocumentFragment();
        //for each product , build a card HTML element
        data.forEach(function(photo) {
          buildCardsUsingDOMAPI(containerFragment, photo);
        });
        //add the container fragment to DOM(the product-list div)
        containerDiv.appendChild(containerFragment);
      });
  }

  fetchPhotos();
  


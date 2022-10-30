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

    //let costP = document.createElement("p");//create p element
    //titleP.setAttribute("class", "prod-title"); //set class HTML attribute
    //costP.setAttribute("class", "prod-cost"); //set class HTML attribute
    //titleP.appendChild(document.createTextNode(data.title)); //adding a text node to the p tag
    //costP.appendChild(document.createTextNode(data.price)); //adding a text node to the p tag
    infoDiv.appendChild(titleP);
    cardDiv.appendChild(imgDiv);
    cardDiv.appendChild(infoDiv);
    container.appendChild(cardDiv);
}



function fetchPhotos() {
    // where we will get products from
    //var url = 'https://jsonplaceholder.typicode.com/albums/2/photos';
    fetch('https://jsonplaceholder.typicode.com/albums/2/photos')
      .then(response => response.json())
      //.then(data => console.log(data))

      //data = Array.from(data)
      
      
      .then((data) => {
        //let data = data.albums

        console.log(data)

        let containerDiv = document.getElementById("product-list");

        //get array of products from data json object
        //let data = Array.from(data)
        //let products = data;

        let containerFragment = document.createDocumentFragment();

        // iterate through json
        
        data.forEach((photo) => {
            buildCardsUsingDOMAPI(containerFragment, photo);

            console.log(photo.url);
            console.log(photo.title);
        });
        
       /*
        for(let photo in data) {
            buildCardsUsingDOMAPI(containerFragment, data[photo]);
            console.log(photo.url);
            console.log(photo.title);
        }
        */
        //add the container fragment to DOM(the product-list div)
        containerDiv.appendChild(containerFragment);

        //console.log(data)

      })
      .catch((error) => {
        console.log(error);
      });
  }

  fetchPhotos();
  


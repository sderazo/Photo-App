function buildCardsUsingDOMAPI(container, data) {
    let cardDiv = document.createElement("div"); //create div element
    cardDiv.setAttribute("class", "product-card"); //set class HTML attribute 

    function fadeOut() {
        var fadeTarget = cardDiv;
        var fadeEffect = setInterval(function() {
        
            if(!fadeTarget.style.opacity) {
                fadeTarget.style.opacity = 1;
            }
            if(fadeTarget.style.opacity > 0) {
                fadeTarget.style.opacity -= 0.1;
            }
            else {
                clearInterval(fadeEffect);
                fadeTarget.remove();
                // decrement num of photo cards after each click
                let containerDiv = document.getElementById("product-list");
                let decrement = containerDiv.childElementCount;
                document.getElementById("counter").innerHTML = decrement;
                console.log(decrement)
            }

        //remove card
        //ev.currentTarget.remove()
        }, 100);
    }
    cardDiv.addEventListener('click', fadeOut);


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

        //get length of array
        let length = data.length
        document.getElementById("counter").innerHTML = length;
        console.log(length)
        
        data.forEach((photo) => {
            buildCardsUsingDOMAPI(containerFragment, photo);

            //console.log(photo.url);
            //console.log(photo.title);
        });
        
        //add the container fragment to DOM(the product-list div)
        containerDiv.appendChild(containerFragment);

      })
      .catch((error) => {
        console.log(error);
      });
  }

  fetchPhotos();
  


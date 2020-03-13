// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function newCard(articleArray) {
  //create elements
  const cardDivOne = document.createElement("div"),
    cardDivTwo = document.createElement("div"),
    cardDivThree = document.createElement("div"),
    cardDivFour = document.createElement("div"),
    cardImg = document.createElement("img"),
    cardSpan = document.createElement("span");

  //add classes
  cardDivOne.classList.add("card");
  cardDivTwo.classList.add("headline");
  cardDivThree.classList.add("author");
  cardDivFour.classList.add("img-container");

  //add content ---- NOT SURE ABOUT THE CONTENT ---- CHECK THE ARRAY INSIDE DATA RESPONSE
  cardDivTwo.textContent = `Headline: ${articleArray[1][0].headline}`;
  cardImg.src = articleArray[1][0].authorPhoto;
  cardSpan.textContent = `Author name: ${articleArray[0]}`;

  //append
  cardDivOne.append(cardDivTwo);
  cardDivOne.append(cardDivThree);
  cardDivThree.append(cardDivFour);
  cardDivThree.append(cardSpan);
  cardDivFour.append(cardImg);

  return cardDivOne;
}

const parentCards = document.querySelector(".cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    // deal with the response data in here
    const entriesData = Object.entries(response.data);
    // console.log(entriesData);
    // console.log(entriesData[0][1]); //object

    //convert to array
    const articleArray = Object.entries(entriesData[0][1]);
    console.log(articleArray);

    // let newArray = articleArray.map(item => {
    //   // return element to new Array
    //   item.articleArray[1];
    //   console.log(newArray);
    // });

    articleArray.forEach(item => {
      articleArray[0].forEach(element => {
        parentCards.append(newCard(item));
      });
    });
  })
  .catch(err => {
    console.log("CATCH: the data was not returned CARDS", err);
  });

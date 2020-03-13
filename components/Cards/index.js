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

function newCard(data) {
  //create elements
  const cardDivOne = document.createElement("div"),
    cardDivTwo = document.createElement("div"),
    cardDivThree = document.createElement("div"),
    cardDivFour = document.createElement("div"),
    cardImg = document.createElement("img"),
    cardSpan = document.createElement("span");

  //add classes
  cardOne.classList.add("card");
  cardDivTwo.classList.add("headline");
  cardDivThree.classList.add("author");
  cardDivFour.classList.add("img-container");

  //add content ---- NOT SURE ABOUT THE CONTENT ---- CHECK THE ARRAY INSIDE DATA RESPONSE
  cardDivTwo.textContent = `Headline: ${entriesData[1].headline}`;
  cardImg.src = entriesData[1].authorPhoto;
  cardSpan.textContent = `Author name: ${entriesData[1].authorName}`;

  //append
  cardDivOne.append(cardDivTwo);
  cardDivOne.append(cardDivThree);
  cardDivThree.append(cardDivFour);
  cardDivThree.append(cardSpan);
  cardDivFour.append(cardImg);

  return cardDivOne;
}

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    // deal with the response data in here
    const entriesData = Object.entries(response.data);
    console.log(entriesData);

    // console.log(response);
  })
  .catch(err => {
    // deal with the error in here
    console.log("CATCH: the data was not returned", err);
  });

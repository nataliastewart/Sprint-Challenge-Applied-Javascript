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

function newCard(articleObject) {
  //create elements
  const card = document.createElement("div"),
    headlineDiv = document.createElement("div"),
    authorDiv = document.createElement("div"),
    imgDiv = document.createElement("div"),
    cardImg = document.createElement("img"),
    bySpan = document.createElement("span");

  //add classes
  card.classList.add("card");
  headlineDiv.classList.add("headline");
  authorDiv.classList.add("author");
  imgDiv.classList.add("img-container");

  //   add content ---- NOT SURE ABOUT THE CONTENT ---- CHECK THE ARRAY INSIDE DATA RESPONSE
  headlineDiv.textContent = articleObject.headline;
  cardImg.src = articleObject.authorPhoto;
  bySpan.textContent = articleObject.authorName;

  //append
  card.append(headlineDiv);
  card.append(authorDiv);
  authorDiv.append(imgDiv);
  authorDiv.append(bySpan);
  imgDiv.append(cardImg);

  return card;
}

const parentCards = document.querySelector(".cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response.data.articles.javascript);
    const js = response.data.articles.javascript;
    js.forEach(item => {
      const jsCard = newCard(item);
      parentCards.append(jsCard);
      console.log(item);
    });

    // deal with the response data in here
    // const entriesData = Object.entries(response.data);
    // console.log(`entriesData `, entriesData);
    // // console.log(entriesData[0][1]); //object

    // //convert to array
    // const articleArray = Object.entries(entriesData[0][1]);
    // console.log(`articleArray `, articleArray);

    // // let newArray = articleArray.map(item => {
    // //   // return element to new Array
    // //   item.articleArray[1];
    // //   console.log(newArray);
    // // });

    // articleArray.forEach(item => {
    //   console.log(` item `, item);
    //   articleArray[0][1].forEach(element => {
    //     console.log(`element `, element);
    //     parentCards.append(newCard(element));
    //   });
    // });
  })
  .catch(err => {
    console.log("CATCH: the data was not returned CARDS", err);
  });

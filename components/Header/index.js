// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header(data) {
  //create elements
  const headerDiv = document.createElement("div"),
    spanDate = document.createElement("span"),
    titleH1 = document.createElement("h1"),
    spanTemp = document.createElement("span");

  //add classes
  headerDiv.classList.add("header");
  spanDate.classList.add("date");
  spanTemp.classList.add("temp");

  //add content ---- NOT SURE ABOUT THE CONTENT ---- CHECK THE ARRAY INSIDE DATA RESPONSE
  spanDate.textContent = "SMARCH 28, 2019";
  titleH1.textContent = "Lambda Times";
  spanTemp.textContent = "98°";

  //append
  headerDiv.append(spanDate);
  headerDiv.append(titleH1);
  headerDiv.append(spanTemp);

  return headerDiv;
}

const parentTag = document.querySelector(".header-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    // deal with the response data in here

    response.data.topics.forEach(item => {
      parentTag.append(Header(item));
    });

    // console.log(response.data);
  })
  .catch(err => {
    // deal with the error in here
    console.log("CATCH: the data was not returned", err);
  });

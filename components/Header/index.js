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
  spanDate.textContent = data.date;
  titleH1.textContent = data.title;
  spanTemp.textContent = data.temp;

  //append
  headerDiv.append(spanDate);
  headerDiv.append(titleH1);
  headerDiv.append(spanTemp);

  return headerDiv;
}

const parentTag = document.querySelector(".header-container");

data.forEach(data => {
  parentTag.append(Header(data));
});

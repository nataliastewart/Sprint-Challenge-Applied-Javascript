// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

//Creating Tab----------------------

function newTabs(BANANA) {
  // create element
  console.log(` BANANA: `, BANANA);
  const tabOne = document.createElement("div");

  //add class
  tabOne.classList.add("tab");

  //add content
  tabOne.textContent = BANANA;
  console.log(`THIS IS TAG CONTENT: `, tabOne.textContent);

  return tabOne;
}

const parentTab = document.querySelector(".topics");

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    const entries = Object.values(response.data.topics);

    entries.forEach(item => {
      parentTab.append(newTabs(item));
    });

    // console.log(`this is my forEACHHH: `, myforEach);

    // console.log("THIS IS TABS CONSOLE", response.data.topics);
  })
  .catch(err => {
    console.log("the data was not returned on the TABSSSS", err);
  });

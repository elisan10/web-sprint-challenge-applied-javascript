import axios from "axios";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  const tabsTopics = document.createElement("div");
  tabsTopics.classList.add("topics")
   
  const tab1 = document.createElement("div")
  const tab2 = document.createElement("div")
  const tab3 = document.createElement("div")
  const tab4 = document.createElement("div")
  const tab5 = document.createElement("div")
  

  tabsTopics.appendChild(tab1)
  tabsTopics.appendChild(tab2)
  tabsTopics.appendChild(tab3)
  tabsTopics.appendChild(tab4)
  tabsTopics.appendChild(tab5)

  tab1.classList.add("tab")
  tab2.classList.add("tab")
  tab3.classList.add("tab")
  tab4.classList.add("tab")
  tab5.classList.add("tab")

  tab1.textContent = topics[0]
  tab2.textContent = topics[1]
  tab3.textContent = topics[2]
  tab4.textContent = topics[3]
  tab5.textContent = topics[4]
  // topics.forEach((topic) => {
  //   const tab = document.createElement("div")
  //   tabsTopics.appendChild(tab) 
  //   tab.textContent = topic
  // })

  return tabsTopics
  
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  axios
  .get(
    "https://lambda-times-api.herokuapp.com/topics"
    )
  .then((response) => {
    const tabsContainer = document.querySelector(selector)
    tabsContainer.appendChild(Tabs(response.data.topics))
  })
  .catch((error) =>{
    console.log(error, "Something is wrong with Lambda Topics, check topics axios")
  })
  
}

export { Tabs, tabsAppender }

let myLeads = []
let oldLeads=[]
// myLeads = JSON.parse(myLeads)
// myLeads.push("Don't know")
// console.log(myLeads)
// myLeads = JSON.stringify(myLeads)
// console.log(typeof  myLeads)


const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
 const tabs = [
       {url: "https://www.google.com"}
    ]
// localStorage.setItem("myLeads" , "This is bs.")
// console.log( localStorage.getItem("myLeads") )
//  localStorage.clear()
let leadFromLocalStorage = JSON.parse( localStorage.getItem("myLeads"))
console.log(leadFromLocalStorage)

if(leadFromLocalStorage){
    myLeads = leadFromLocalStorage
    render(myLeads)
}
tabBtn.addEventListener("click", function(){
     chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//    console.log(tabs[0].url)
myLeads.push(tabs[0].url)
localStorage.setItem("myLeads", JSON.stringify(myLeads))
render(myLeads)
     })
})
function render(Leads){

    let listItems = ""
    for(i = 0; i < Leads.length; i++){
        // console.log(myLeads[i])
        listItems += `<li>
         <a  href='${Leads[i]}' target=_blank>
          ${Leads[i]}
          </a> 
         </li>`
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
    }
    ulEl.innerHTML = listItems
}
deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    console.log( localStorage.getItem("myLeads"))
})
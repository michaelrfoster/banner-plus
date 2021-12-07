let buttonDiv = document.getElementById("buttonDiv");
let inputDiv = document.getElementById("inputDiv");
//let preferencesDiv = document.getElementById("preferencesDiv");
let numInputs = 0;

function handleAddCRNButtonClick(event) {

  let input = document.createElement("input");
  input.setAttribute('class', 'input');
  input.setAttribute('id', 'txt_crn' + (numInputs+1) )
  inputDiv.appendChild(input);
  insertBreaks(inputDiv, 2)
  numInputs++;
}

function constructPage() {

  let input = document.createElement("input");
  input.setAttribute('class', 'input');
  input.setAttribute('id', 'txt_crn' + (numInputs+1) )
  inputDiv.appendChild(input);
  insertBreaks(inputDiv, 2)
  numInputs++;

  let addCRNButton = document.createElement("button");
  addCRNButton.setAttribute('class', 'btn');
  addCRNButton.setAttribute('id', 'addAnotherCRN' )
  addCRNButton.textContent = 'Add more CRNs';
  addCRNButton.addEventListener("click", handleAddCRNButtonClick);
  buttonDiv.appendChild(addCRNButton);

  /*
  //font-size:0px;

  let enterCRNsTab = document.createElement("button");
  enterCRNsTab.setAttribute('class', 'btn');
  enterCRNsTab.setAttribute('id', 'enterCRNs-tab' )
  //enterCRNsTab.setAttribute('font-size', '0px');
  enterCRNs.setAttribute("style","visibility: hidden;")
  enterCRNsTab.textContent = '';
  enterCRNsTab.addEventListener("click", handleEnterCRNsTabClick);
  preferencesDiv.appendChild(enterCRNsTab);


  var x = document.getElementById("enterCRNsTabText");
  x.style.display = "none";

  var y = document.getElementById("addCRNbutton");
  y.style.display = "none";
  */
}

function handleEnterCRNsTabClick(event) {
  var x = document.getElementById("enterCRNsTabText");
  x.style.display = "block"
}

function insertBreaks(div, numBreaks) {
  for (i = 0; i < numBreaks; i++) {
    let br1 = document.createElement("br");
    div.appendChild(br1);
  }
}

function toggleCheckbox(element)
 {
   element.checked = true;
 }

constructPage()

let buttonDiv = document.getElementById("buttonDiv");
let inputDiv = document.getElementById("inputDiv");
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
}

function insertBreaks(div, numBreaks) {
  for (i = 0; i < numBreaks; i++) {
    let br1 = document.createElement("br");
    div.appendChild(br1);
  }
}

constructPage()

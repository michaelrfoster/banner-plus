let buttonDiv = document.getElementById("buttonDiv");
let inputDiv = document.getElementById("inputDiv");

function handleAddCRNButtonClick(event) {

  let input = document.createElement("input");
  input.setAttribute('class', 'input');
  inputDiv.appendChild(input);
  insertBreaks(inputDiv, 2)
}

function constructPage() {

  let input = document.createElement("input");
  input.setAttribute('class', 'input');
  inputDiv.appendChild(input);
  insertBreaks(inputDiv, 2)

  let addCRNButton = document.createElement("button");
  addCRNButton.setAttribute('class', 'btn');
  addCRNButton.textContent = 'Add more CRNs';
  addCRNButton.addEventListener("click", handleAddCRNButtonClick);
  buttonDiv.appendChild(addCRNButton);

  let saveButton = document.createElement("button");
  saveButton.setAttribute('class', 'btn');
  saveButton.textContent = 'Save';
  saveButton.addEventListener("click", handleSaveButtonClick);
  buttonDiv.appendChild(saveButton);
}

function insertBreaks(div, numBreaks) {
  for (i = 0; i < numBreaks; i++) {
    let br1 = document.createElement("br");
    div.appendChild(br1);
  }
}

constructPage()

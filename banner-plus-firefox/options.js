//import Swal from 'sweetalert2'

// CommonJS
//const Swal = require('sweetalert2')

let buttonDiv = document.getElementById("buttonDiv");
let inputDiv = document.getElementById("inputDiv");
const checkboxNames = ["switchToEnterCRNsTabCheckBox", "addToSummaryCheckBox", "submitCheckBox", "conditionalAddAndDropCheckBox"]

function handleAddCRNButtonClick(event) {

  let input = document.createElement("input");
  input.setAttribute('class', 'input');
  inputDiv.appendChild(input);
  insertBreaks(inputDiv, 2)
}

function handleSaveButtonClick(event) {
  console.log("Saving CRNs")


  const CRNs = [];
  let alertText = " CRN(s) Saved:\n"

  try {
    for (i = 0; i < 99; i++) {
      if (document.getElementsByClassName('input')[i].value.length > 0) {
        CRNs.push(document.getElementsByClassName('input')[i].value)
        alertText += document.getElementsByClassName('input')[i].value + "\n"
      }
    }
  } catch (error) {

  }

  chrome.storage.sync.set({ CRNs });

  alertText = CRNs.length + alertText

  //alert(alertText)
  Swal.fire({
    //position: 'top-end',
    icon: 'success',
    title: "CRNs Saved",
    showConfirmButton: false,
    timer: 1500
  })
}

function insertBreaks(div, numBreaks) {
  for (i = 0; i < numBreaks; i++) {
    let br1 = document.createElement("br");
    div.appendChild(br1);
  }
}

function handleCheckBoxClick(event) {
  var preferences = {};

  //console.log("In handleCheckBoxClick")

  for (i=0;i<checkboxNames.length;i++) {

    preferences[checkboxNames[i]] = document.getElementById(checkboxNames[i]).checked
  }

  //console.log("preferences", preferences)

  chrome.storage.sync.set({ preferences});
}

function constructCheckBoxes() {
  console.log("Hello")
  chrome.storage.sync.get("preferences", ({ preferences }) => {

    document.getElementById('switchToEnterCRNsTabCheckBox').checked = preferences["switchToEnterCRNsTabCheckBox"];
    document.getElementById('switchToEnterCRNsTabCheckBox').onclick = handleCheckBoxClick
    document.getElementById('addToSummaryCheckBox').checked = preferences["addToSummaryCheckBox"];
    document.getElementById('addToSummaryCheckBox').onclick = handleCheckBoxClick
    document.getElementById('submitCheckBox').checked = preferences["submitCheckBox"];
    document.getElementById('submitCheckBox').onclick = handleCheckBoxClick
    document.getElementById('conditionalAddAndDropCheckBox').checked = preferences["conditionalAddAndDropCheckBox"];
    document.getElementById('conditionalAddAndDropCheckBox').onclick = handleCheckBoxClick;
  });
}

function constructPage() {

  const tempCRNs = []

  chrome.storage.sync.get("CRNs", ({ CRNs }) => {

    if (CRNs.length == 0) { // Add a default empty input box
      let input = document.createElement("input");
      input.setAttribute('class', 'input');
      inputDiv.appendChild(input);
      insertBreaks(inputDiv, 2)
    } else { // Add all the CRNs saved to the extension
      for (CRN of CRNs) {
        let input = document.createElement("input");
        input.setAttribute('class', 'input');
        input.setAttribute('value', CRN);
        inputDiv.appendChild(input);
        insertBreaks(inputDiv, 2)
      }
    }
  });

  let addCRNButton = document.createElement("button");
  addCRNButton.setAttribute('class', 'btn');
  addCRNButton.setAttribute('style', 'margin:10px;');
  addCRNButton.textContent = 'Add more CRNs';
  addCRNButton.addEventListener("click", handleAddCRNButtonClick);
  buttonDiv.appendChild(addCRNButton);

  let saveButton = document.createElement("button");
  saveButton.setAttribute('class', 'btn');
  saveButton.setAttribute('id', 'saveBtn');
  saveButton.textContent = 'Save';
  saveButton.addEventListener("click", handleSaveButtonClick);
  buttonDiv.appendChild(saveButton);


  constructCheckBoxes();

}



constructPage()

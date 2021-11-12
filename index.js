let buttonDiv = document.getElementById("buttonDiv");
let inputDiv = document.getElementById("inputDiv");

function handleButtonClick(event) {
  let br1 = document.createElement("br");
  let br2 = document.createElement("br");
  inputDiv.appendChild(br1);
  inputDiv.appendChild(br2);

  let input = document.createElement("input");
  input.setAttribute('class', 'input');
  inputDiv.appendChild(input);
}

function constructPage() {
  let input = document.createElement("input");
  input.setAttribute('class', 'input');
  inputDiv.appendChild(input);

  let button = document.createElement("button");
  button.setAttribute('class', 'btn');
  button.textContent = 'Add more CRNs';

  button.addEventListener("click", handleButtonClick);
  buttonDiv.appendChild(button);
}

constructPage()

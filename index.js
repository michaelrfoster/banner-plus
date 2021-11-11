let page = document.getElementById("buttonDiv");

function handleButtonClick(event) {

  let br1 = document.createElement("br");
  let br2 = document.createElement("br");
  page.appendChild(br1);
  page.appendChild(br2);

  let button = document.createElement("input");
  button.setAttribute('class', 'input');
  //button.textContent = 'NEW BUTTON';

  //button.addEventListener("click", handleButtonClick);


  page.appendChild(button);
}

function constructPage() {
  let button = document.createElement("button");
  button.setAttribute('class', 'btn');
  button.textContent = 'test value';

  button.addEventListener("click", handleButtonClick);
  page.appendChild(button);
}

constructPage()

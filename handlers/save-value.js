function saveValueHandler() {
  debugger;
  // read new number from user input
  let newValue = document.getElementById("input").value;
  let newInput = Number(newValue);
  //Check if input is NaN or not
  if (isNaN(newInput)) {
    //Create NaN list
    let notNumberList = document.getElementById("Nany");
    const ulEl = notNumberList.children[0];
    const ulEl = document.createElement("li");
    entries.nany.push(notNumberList);
    ulEl.innerText = newValue;
    notNumberList.appendChild(ulEl);
  } else {
    // Create Number list
    let numberList = document.getElementById("Numbery");
    entries.numbery.push(numberList);
    const ulEl = numberList.children[0];
    const ulEl = document.createElement("li");
    ulEl.innerText = newValue;
    numberList.appendChild(ulEl);
  }

  // log user interaction: handler name, user input, new state
  log.push({
    handler: "saveValueHandler",
    newValue,
    entries: JSON.parse(JSON.stringify(entries))
  });
  return true;
}

function saveValueHandler() {
  debugger;
  // read new number from user input
  let newValue = document.getElementById("input").value;
  let newInput = Number(newValue);
  //Check if input is NaN or not
  if (isNaN(newInput)) {
    //Create NaN list
    let notNumberList = document.getElementById("Nany");
    const ulEl = document.createElement("li");
    entries.nany.push(newValue);
    ulEl.innerText = newValue;
    notNumberList.appendChild(ulEl);
  } else {
    // Create Number list
    let numberList = document.getElementById("Numbery");
    const ulEl = document.createElement("li");
    entries.numbery.push(newValue);
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

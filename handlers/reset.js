function resetHandler() {
  debugger;
  // reset state to initial values
  document.getElementById("input").value = "";
  let notNumberList = document.getElementById("Nany");
  notNumberList.innerHTML = "";

let numberList = document.getElementById("Numbery");
numberList.innerHTML = "";

//empty the state object
entries.numbery = [];
entries.nany = [];
  // log interaction: handler name, new state
  log.push({
    handler: 'resetHandler',
    numbers: JSON.parse(JSON.stringify(entries))
  })


}
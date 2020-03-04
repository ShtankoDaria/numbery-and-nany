function saveValueHandler() {
  debugger;
  // read new number from user input
let newValue =  document.getElementById('input').value;
//Check if input is NaN or not
let newInput = Number(newValue);

if (isNaN(newInput)){
entries.nany.push(newValue);}
else {
  entries.numbery.push(newValue);
}
 

  // log user interaction: handler name, user input, new state
  log.push({
    handler: 'saveValue',
    newInput: newValue,
    numbers: JSON.parse(JSON.stringify(entries))
  })
}

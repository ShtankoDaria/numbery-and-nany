function saveValueHandler() {
  debugger;
  // read new number from user input
let newValue =  document.getElementById('input').value;

// Create Number list
let numberList = document.getElementById('Numbery');
const ulEl = numberlist.children[0];
const ulEl = document.createElement("li");
      ulEl.innerText = newValue;
      numberList.appendChild(ulEl);
//Create NaN list
let notNumberList = document.getElementById('Nany');
const ulEl = numberlist.children[0];
const ulEl = document.createElement("li");
      ulEl.innerText = newValue;
      notNumberList.appendChild(ulEl);
//Check if input is NaN or not
let newInput = Number(newValue);

if (isNaN(newInput)){
entries.nany.push(notNumberList);}
else {
  entries.numbery.push(numberList);
}
 


  // log user interaction: handler name, user input, new state
  log.push({
    handler: 'saveValue',
    newInput: newValue,
    numbers: JSON.parse(JSON.stringify(entries))
  })
}

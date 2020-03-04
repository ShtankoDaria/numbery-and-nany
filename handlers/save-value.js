function saveNumberHandler() {
  debugger;
  // read new number from user input
let newValue =  document.getElementById('input').value;
//Number(document.getElementById('input').value);
  // read from state the data you will need for the next step
  numbers.all.push(newValue);
  // find the new biggest and smallest values
  let big = Math.max(...numbers.all); 
  let small = Math.min(...numbers.all);
 

  // update state: new biggest, new smallest, new current & save the last current
  numbers.biggest  = big;
  numbers.smallest = small;
  // re-render the user interface with values stored in state
  document.getElementById("biggest").innerText = big;
  document.getElementById("smallest").innerText = small;
  // log user interaction: handler name, user input, new state
  log.push({
    handler: 'save number',
    newInput: newValue,
    numbers: JSON.parse(JSON.stringify(numbers))
  })
}

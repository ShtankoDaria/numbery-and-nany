function removeValueHandler() {
  debugger;
  // read new value from user input
  let removeValue =  document.getElementById('input').value;
  removeValue.parentNode.removeChild(removeValue);
}

 

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

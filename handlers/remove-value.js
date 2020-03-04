function removeValueHandler() {
  debugger;

  // read new value from user input

  let removeValue =  document.getElementById('input').value;
  removeValue.parentNode.removeChild(removeValue);
}

 

  // log user interaction: handler name, user input, new state
  log.push({
    handler: 'save number',
    newInput: newValue,
    numbers: JSON.parse(JSON.stringify(numbers))
  })
}

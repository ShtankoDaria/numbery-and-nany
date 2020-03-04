function removeValueHandler() {
  debugger;

  // read new value from user input

  let newValue =  document.getElementById('input').value;
  newValue.parentNode.removeChild(newValue);
}

 

  // log user interaction: handler name, user input, new state
  log.push({
    handler: "removeValueHandler",
    newValue,
    entries: JSON.parse(JSON.stringify(entries))
  });

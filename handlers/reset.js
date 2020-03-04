function resetHandler() {
  debugger;
  // reset state to initial values
  document.getElementById("input").value = "";
 
}
 
 
  // log interaction: handler name, new state
  log.push({
    handler: 'reset',
    numbers: JSON.parse(JSON.stringify(entries))
  })

}

function removeValueHandler() {
  debugger;

  // read new value from user input
  
  let newValue =  document.getElementById('input').value;
  let newInput = Number(newValue);

  //Check if input is NaN or not
  if (isNaN(newInput)) {
   
    //Create NaN list
   /* if (entries.nany.includes(newValue)) {
      const valueRemove = entries.nany.indexOf(newValue);
      entries.nany.splice(indexRemove, 1);
      let notNumberList = document.getElementById("Nany");
  for (let i = notNumberList.length - 1; i >= 0; i--)
  if (notNumberList.indexOf(notNumberList[i]) === -1) {
    notNumberList.push(notNumberList[i])
  }
}
}*/
/*let unique = [];
for (let i = notNumberList.children.length - 1; i >= 0; i--)
if (unique.indexOf(newValue[i]) === -1) {
unique.push(newValue[i])
}
return unique;
   */
  let valRemove = entries.nany.indexOf(newValue);
  entries.nany.splice(valRemove, 1);

   let notNumberList = document.getElementById("Nany");
   for (let i = 0; i < notNumberList.children.length; i++) {
     if (notNumberList.children[i].innerText === newValue) {
      notNumberList.removeChild(notNumberList.children[i]);
   
     }
   }
   document.getElementById("input").value = "";
  }
  else{
  let valRemove = entries.nany.indexOf(newValue);
  entries.numbery.splice(valRemove, 1);

  let numberList = document.getElementById("Numbery");

   for (let i = 0; i < numberList.children.length; i++) {
     if (numberList.children[i].innerText === newValue) {
      numberList.removeChild(numberList.children[i]);
   
     }
   }
   document.getElementById("input").value = "";
  }
  // log user interaction: handler name, user input, new state
  log.push({
    handler: "removeValueHandler",
    newValue,
    entries: JSON.parse(JSON.stringify(entries))
  });

  }

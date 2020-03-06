function removeValueHandler() {
  debugger;

  // read new value from user input
  
  let newValue =  document.getElementById('input').value;
  let newInput = Number(newValue);
  
  //Check if input is NaN or not
  if (isNaN(newInput)) {
   let index = '';
   if (entries.nany.includes(newValue)){
     //let unique = [];
     index = entries.nany.indexOf(newValue);
     let unique = entries.nany.splice(index,1);
   }
   let notNumberList = document.getElementById("Nany");
   notNumberList.removeChild(notNumberList.children[index]);
  }
  else {
    let index = '';
    if (entries.numbery.includes(newValue)){
      index = entries.numbery.indexOf(newValue);
      let unique = entries.numbery.splice(index,1);
    }
    let numberList = document.getElementById("Numbery");
    numberList.removeChild(numberList.children[index]);
   }
     
  

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


  log.push({
    handler: "removeValueHandler",
    newValue,
    entries: JSON.parse(JSON.stringify(entries))
  });

  }

// // Function to handle edit functionality
// function editRow(iconElement) {
//     var row = iconElement.closest("tr");
//     var cells = row.cells;
//     document.getElementById("dateLightOn").value = cells[0].innerHTML;
//     document.getElementById("timeLightOn").value = cells[1].innerHTML;
//     document.getElementById("dateGeneratorOn").value = cells[2].innerHTML;
//     document.getElementById("timeGeneratorOn").value = cells[3].innerHTML;
//     document.getElementById("dieselUsage").value = cells[4].innerHTML;
// }

// // Function to handle delete functionality
// function deleteRow(iconElement) {
//     if (confirm("Are you sure you want to delete this entry?")) {
//         var row = iconElement.closest("tr");
//         row.remove();
//     }
// }

// document.getElementById("usageForm").addEventListener("submit", function(event) {
//     event.preventDefault();
    
//     var dateLightOn = document.getElementById("dateLightOn").value;
//     var timeLightOn = new Date("1970-01-01T" + document.getElementById("timeLightOn").value + "Z");
//     var dateGeneratorOn = document.getElementById("dateGeneratorOn").value;
//     var timeGeneratorOn = new Date("1970-01-01T" + document.getElementById("timeGeneratorOn").value + "Z");
//     var dieselUsage = parseInt(document.getElementById("dieselUsage").value);
  
//     var timeDifference = timeGeneratorOn.getTime() - timeLightOn.getTime();
  
//     if (timeDifference < 0) {
//       timeDifference += 24 * 60 * 60 * 1000;
//     }
  
//     var hours = Math.floor(timeDifference / (60 * 60 * 1000));
//     var minutes = Math.floor((timeDifference % (60 * 60 * 1000)) / (60 * 1000));
//     var seconds = Math.floor((timeDifference % (60 * 1000)) / 1000);
  
//     var table = document.getElementById("usageTable");
//     var row = table.insertRow(-1);
//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     var cell3 = row.insertCell(2);
//     var cell4 = row.insertCell(3);
//     var cell5 = row.insertCell(4);
//     var cell6 = row.insertCell(5);
//     var cell7 = row.insertCell(6);
//     var cell8 = row.insertCell(7);
//     cell1.innerHTML = dateLightOn;
//     cell2.innerHTML = timeLightOn.toLocaleTimeString();
//     cell3.innerHTML = dateGeneratorOn;
//     cell4.innerHTML = timeGeneratorOn.toLocaleTimeString();
//     cell5.innerHTML = dieselUsage + "ltr" ;
//     cell6.innerHTML = hours + "h " + minutes + "m " + seconds + "s";
//     cell7.innerHTML = '<i class="fas fa-edit edit-icon" onclick="editRow(this)"></i>';
//     cell8.innerHTML = '<i class="fas fa-trash delete-icon" onclick="deleteRow(this)"></i>';
    
//     document.getElementById("dateLightOn").value = "";
//     document.getElementById("timeLightOn").value = "";
//     document.getElementById("dateGeneratorOn").value = "";
//     document.getElementById("timeGeneratorOn").value = "";
//     document.getElementById("dieselUsage").value = "";
// });

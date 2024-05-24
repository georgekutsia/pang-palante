
// // Add event listeners to handle double-click and single-click
// var listItems = document.querySelectorAll('#sortable-list li');
// listItems.forEach(function(item) {
//   item.addEventListener('click', function(event) {
//     if (!event.detail || event.detail === 1) {
//       sortable.option("disabled", false);
//     }
//   });
//   item.addEventListener('dblclick', function(event) {
//     sortable.option("disabled", true);
//     this.setAttribute('contenteditable', 'true');
//     this.focus();
//   });
//   item.addEventListener('blur', function() {
//     this.removeAttribute('contenteditable');
//     saveListOrder(); // Save list order when blur event occurs (focus is lost)
//   });
// });
// function clearLocalStorage() {
//   localStorage.removeItem('sortableListOrder');
//   // Opcionalmente, puedes recargar la página después de borrar los datos
//   window.location.reload();
// }

// function showList(){
// var listOfBugs = document.getElementById('sortable-list');
// if(listOfBugs.style.display === "none"){
//   listOfBugs.style.display = "block"
// } else{
//   listOfBugs.style.display = "none"
// }
// }

// function dragStart(event) {
//   var rect = event.target.getBoundingClientRect();
//   var offsetX = event.clientX - rect.left;
//   var offsetY = event.clientY - rect.top;
//   event.dataTransfer.setData("text", offsetX + ',' + offsetY);
// }

// // Evento para permitir soltar el contenedor en una nueva posición
// document.addEventListener("dragover", function(event) {
//   event.preventDefault();
// });

// // Evento para manejar el soltar del contenedor en una nueva posición
// document.addEventListener("drop", function(event) {
//   event.preventDefault();
//   var data = event.dataTransfer.getData("text").split(',');
//   var offsetX = parseFloat(data[0]);
//   var offsetY = parseFloat(data[1]);
//   var element = document.getElementById('bug-list');
//   element.style.left = (event.clientX - offsetX/2) + 'px';
//   element.style.top = (event.clientY - offsetY/2) + 'px';
// });




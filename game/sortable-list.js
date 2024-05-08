// sortable-list.js

// Function to save the order of the list
function saveListOrder() {
  var items = document.getElementById('sortable-list').querySelectorAll('li');
  var order = [];
  items.forEach(function(item) {
    order.push(item.textContent);
  });
  localStorage.setItem('sortableListOrder', JSON.stringify(order));
}

// Function to load the order of the list
function loadListOrder() {
  var order = JSON.parse(localStorage.getItem('sortableListOrder'));
  if (order) {
    var ul = document.getElementById('sortable-list');
    ul.innerHTML = ''; // Clear existing list
    order.forEach(function(text) {
      var li = document.createElement('li');
      li.textContent = text;
      ul.appendChild(li);
    });
  }
}

// Function to add an item to the list
function addItemToList(itemText) {
  var ul = document.getElementById('sortable-list');
  var li = document.createElement('li');
  li.textContent = itemText;
  ul.appendChild(li);
  saveListOrder(); // Save list order when an item is added
}

// Function to remove an item from the list
function removeItemFromList(index) {
  var ul = document.getElementById('sortable-list');
  ul.removeChild(ul.children[index]);
  saveListOrder(); // Save list order when an item is removed
}

// Add event listeners to handle double-click and single-click
var listItems = document.querySelectorAll('#sortable-list li');
listItems.forEach(function(item) {
  item.addEventListener('click', function(event) {
    if (!event.detail || event.detail === 1) {
      sortable.option("disabled", false);
    }
  });
  item.addEventListener('dblclick', function(event) {
    sortable.option("disabled", true);
    this.setAttribute('contenteditable', 'true');
    this.focus();
  });
  item.addEventListener('blur', function() {
    this.removeAttribute('contenteditable');
    saveListOrder(); // Save list order when blur event occurs (focus is lost)
  });
});
function clearLocalStorage() {
  localStorage.removeItem('sortableListOrder');
  // Opcionalmente, puedes recargar la página después de borrar los datos
  window.location.reload();
}

function showList(){
var listOfBugs = document.getElementById('sortable-list');
if(listOfBugs.style.display === "none"){
  listOfBugs.style.display = "block"
} else{
  listOfBugs.style.display = "none"
}
}



function dragStart(event) {
  var rect = event.target.getBoundingClientRect();
  var offsetX = event.clientX - rect.left;
  var offsetY = event.clientY - rect.top;
  event.dataTransfer.setData("text", offsetX + ',' + offsetY);
}

// Evento para permitir soltar el contenedor en una nueva posición
document.addEventListener("dragover", function(event) {
  event.preventDefault();
});

// Evento para manejar el soltar del contenedor en una nueva posición
document.addEventListener("drop", function(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text").split(',');
  var offsetX = parseFloat(data[0]);
  var offsetY = parseFloat(data[1]);
  var element = document.getElementById('bug-list');
  element.style.left = (event.clientX - offsetX/2) + 'px';
  element.style.top = (event.clientY - offsetY/2) + 'px';
});




var sortable = new Sortable(document.getElementById('sortable-list'), {
  animation: 150,
  ghostClass: 'sortable-ghost',
  onEnd: function (evt) {
    saveListOrder();
  }
});

function saveListOrder() {
  var items = document.getElementById('sortable-list').querySelectorAll('li');
  var order = [];
  items.forEach(function(item) {
    order.push(item.textContent);
  });
  localStorage.setItem('sortableListOrder', JSON.stringify(order));
}

function loadListOrder() {
  var order = JSON.parse(localStorage.getItem('sortableListOrder'));
  if (order) {
    var ul = document.getElementById('sortable-list');
    ul.innerHTML = ''; // Clear existing list
    order.forEach(function(text) {
      var li = document.createElement('li');
      li.textContent = text;
      ul.appendChild(li);
    });
  }
}

// Load list order when the page loads
loadListOrder();

// Add event listeners to handle double-click and single-click
var listItems = document.querySelectorAll('#sortable-list li');
listItems.forEach(function(item) {
  item.addEventListener('click', function(event) {
    if (!event.detail || event.detail === 1) {
      sortable.option("disabled", false);
    }
  });
  item.addEventListener('dblclick', function(event) {
    sortable.option("disabled", true);
    this.setAttribute('contenteditable', 'true');
    this.focus();
  });
  item.addEventListener('blur', function() {
    this.removeAttribute('contenteditable');
    saveListOrder(); // Save list order when blur event occurs (focus is lost)
  });
});
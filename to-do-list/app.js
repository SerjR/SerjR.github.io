var toDoList = document.querySelector('tbody');
var input = document.getElementById("toDoEl");
var number = 1;

// array for toDo
var toDoArray = [];

// Click events to complete and remove tasks
toDoList.addEventListener('click', function(ev) {
   switch (ev.target.tagName) {
      case "TD":
         ev.target.parentNode.classList.toggle('checked');
         break;
      case "SPAN":
         var tableRow = ev.target.parentNode.parentNode;
         for (var i = 0; i < toDoArray.length; i++) {
            if (toDoArray[i].number == tableRow.firstChild.innerHTML) {
               toDoArray.splice(i, 1);
            }
         }
         tableRow.remove();
         console.log(toDoArray);
         break;
      default:
   }
}, false);

// Submit on enter press
input.addEventListener("keyup", function(event) {
   event.preventDefault();
   if (event.keyCode === 13) {
      document.getElementById("addBtn").click();
   }
});

// Adding new toDo to table on page
function newElement() {
   //Create toDo elements
   var inputValue = document.getElementById('toDoEl').value;
   var toDoText = document.createTextNode(inputValue);
   var cross = document.createElement('SPAN');
   var x = document.createTextNode("x");
   cross.className = "close";
   cross.appendChild(x);
   var tr = document.createElement('tr');
   var td1 = document.createElement('td');
   var nodeId = document.createTextNode(number);
   var td2 = document.createElement('td');
   td1.appendChild(nodeId);
   td2.appendChild(toDoText);
   td2.appendChild(cross);
   tr.appendChild(td1);
   tr.appendChild(td2);

   // Add toDo item to table
   if (inputValue == "") {
      alert("Type toDo!");
   } else {
      // Add toDo item to array
      var newElement = {
         number: number,
         text: inputValue
      };
      toDoArray.push(newElement)
      // Add toDo item to table
      document.getElementById('toDoList').appendChild(tr);
      console.log(toDoArray);
      number++;
   }
   // Clear input after adding toDo
   document.getElementById('toDoEl').value = "";
}

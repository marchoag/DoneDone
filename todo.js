const firebaseConfig = {
  apiKey: "AIzaSyC6QlTOioLHGcmT9PScbal-ovLH7_cxErk",
  authDomain: "doneandmoredone.firebaseapp.com",
  projectId: "doneandmoredone",
  storageBucket: "doneandmoredone.appspot.com",
  messagingSenderId: "534343077398",
  appId: "1:534343077398:web:426c86c3f53703235fef37"
};

firebase.initializeApp(firebaseConfig);

const form = document.querySelector('#signup-form');

function addEventListeners() {
  const form = document.querySelector('#signup-form');

  form.addEventListener('submit', event => {
});

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  li.setAttribute('draggable', 'true');
  li.addEventListener('dragstart', function(event) {
  draggedTask = event.target;
});
li.addEventListener('dragover', function(event) {
  event.preventDefault();
});
li.addEventListener('drop', function(event) {
  event.preventDefault();
  this.parentNode.insertBefore(draggedTask, this);
});
  var hamburger = document.createElement("div");
hamburger.className = "hamburger";
li.appendChild(hamburger);

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  // Click on a close button to hide the current list item
  var close = document.getElementsByClassName("close");
  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

  // Add a "checked" symbol when clicking on a list item
  li.addEventListener("click", function(ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
      console.log(ev.target.classList);
    }
  }, false);
}

document.getElementById("myInput").addEventListener("keydown", function(event) {
  if (event.code === "Enter") {
    newElement();
  }
});

firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(function(user) {
    console.log('Successfully signed up with email and password');
  })
  .catch(function(error) {
    console.error(error);
  });
}

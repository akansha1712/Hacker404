// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyAipN_k6rEGBCg8WGkIroXVAhiSPPsRRbs",
   authDomain: "database-e70dd.firebaseapp.com",
   databaseURL: "https://database-e70dd.firebaseio.com",
   projectId: "database-e70dd",
   storageBucket: "database-e70dd.appspot.com",
   messagingSenderId: "544678758673",
   appId: "1:544678758673:web:988f519a0fb12483c724b0",
   measurementId: "G-6C4D8SPHMG"
};

firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    phone:phone,
    message:message
  });
}
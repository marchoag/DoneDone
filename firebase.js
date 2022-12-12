// Initialize Firebase
var firebaseConfig = {
    // your Firebase config here
  };
  firebase.initializeApp(firebaseConfig);

// Add the Firebase authentication module
var auth = firebase.auth();

// Sign in user
auth.signInWithEmailAndPassword(email, password).then(function() {
    // Successful sign in
  }).catch(function(error) {
    // Handle errors
  });

  // Create new user
auth.createUserWithEmailAndPassword(email, password).then(function() {
    // Successful user creation
  }).catch(function(error) {
    // Handle errors
  });

  // Listen for changes in the user's authentication state
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in
    } else {
      // User is signed out
    }
  });  
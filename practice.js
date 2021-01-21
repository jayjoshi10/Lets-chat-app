var firebaseConfig = {
    apiKey: "AIzaSyBjR0PKkWNjuQLjIh6AA4LCO6nRQt9I4I0",
    authDomain: "kwitter-89a69.firebaseapp.com",
    databaseURL: "https://kwitter-89a69-default-rtdb.firebaseio.com",
    projectId: "kwitter-89a69",
    storageBucket: "kwitter-89a69.appspot.com",
    messagingSenderId: "349867899286",
    appId: "1:349867899286:web:44f8ba0deb5d484ea905b7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser(){
    user_name= document.getElementById("User name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}
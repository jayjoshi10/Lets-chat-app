
//ADD YOUR FIREBASE LINKS HERE
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
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome" + user_name + "!";
    function addRoom()
    {
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location= "kwitter_room.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name-" +Room_names);
row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();
function redirectToRoomName()
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_room.html";

}
function logOut() 
{ 
      localStorage.removeItem("user_name"); 
      localStorage.removeItem("room_name"); 
      window.location = "kwitter.html"; 
}
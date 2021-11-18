
var firebaseConfig = {
      apiKey: "AIzaSyDsewEyPYXR0MYhC2O1GtNfgFpbt0tAg3o",
      authDomain: "kwitter-9e305.firebaseapp.com",
      databaseURL: "https://kwitter-9e305-default-rtdb.firebaseio.com",
      projectId: "kwitter-9e305",
      storageBucket: "kwitter-9e305.appspot.com",
      messagingSenderId: "889462093080",
      appId: "1:889462093080:web:3fb6a92eab8f6f5f985a6d",
      measurementId: "G-TKEJKV1CBP"
    };
    
    
      firebase.initializeApp(firebaseConfig);
      user_name=localStorage.getItem("userName");
      document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
      function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room name",room_name);
      window.location="kwitter_page.html";
      }

function getData() 
{
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       row="<div class='room_name', id="+Room_names+" onclick='reDirectToRoomName(this.id)'>#"+Room_names+"<div><hr>";
       document.getElementById("output").innerHTML+=row;


      
      });});}
getData();

function reDirectToRoomName(roomName){
      localStorage.setItem("room name",roomName);
      window.location="kwitter_page.html";    
}

function logout(){
      localStorage.removeItem("userName");
      localStorage.removeItem("room name");
      window.location="index.html";
}

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
    room_name=localStorage.getItem("room name");
    function send(){
          message_value=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                Name:user_name,
                Message:message_value,
                like:0
          });
          document.getElementById("msg").value="";

    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         Name=message_data['Name'];
         message=message_data['Message'];
         likes=message_data['like']
         name_with_tag="<h4>"+Name+"<img class='user_tick src='tick.png''></h4>";
         message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
         like_with_tag="<button class='btn btn-warning' id="+firebase_message_id+" onclick='update_likes(this.id)' value="+likes+">";
         span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like : "+likes+"</span></button><hr>";
         row=name_with_tag+message_with_tag+like_with_tag+span_with_tag;
         document.getElementById("output").innerHTML+=row;
      


      } });  }); }
getData();


function logout(){
      localStorage.removeItem("userName");
      localStorage.removeItem("room name");
      window.location="index.html";
}



function update_likes(message_id){
      likes_count=document.getElementById(message_id).value;
      updated_likes=Number(likes_count)+1;
      firebase.database().ref(room_name).child(message_id).update({
        like:updated_likes    
      });
}



























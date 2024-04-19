var firebaseConfig = {
      apiKey: "AIzaSyDT6K9QXJ0UPr-nr7H3UxhWyietgcBtys4",
      authDomain: "ammar-38eb7.firebaseapp.com",
      databaseURL: "https://ammar-38eb7-default-rtdb.firebaseio.com",
      projectId: "ammar-38eb7",
      storageBucket: "ammar-38eb7.appspot.com",
      messagingSenderId: "592103846763",
      appId: "1:592103846763:web:75af115a792ce172e6122e",
      measurementId: "G-NCPLNN9RV5"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
     user_name=localStorage.getItem("user_name")
     room_name=localStorage.getItem("room_name")
     
     function send(){
      msg=document.getElementById("msg").value
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      })
      document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

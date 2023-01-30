const firebaseConfig = {
      apiKey: "AIzaSyDib9aE96KLslYf15iofsPVdTHAF-yP2Ag",
      authDomain: "kwitter-final-18b47.firebaseapp.com",
      databaseURL: "https://kwitter-final-18b47-default-rtdb.firebaseio.com",
      projectId: "kwitter-final-18b47",
      storageBucket: "kwitter-final-18b47.appspot.com",
      messagingSenderId: "547635494150",
      appId: "1:547635494150:web:797226baa1c0c56e917287"
};
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").value = "Welcome " + user_name + "!";

function add_room() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding a room"
      });

      document.getElementById("room_name").input = "";

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
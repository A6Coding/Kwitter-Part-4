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


function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      })
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();
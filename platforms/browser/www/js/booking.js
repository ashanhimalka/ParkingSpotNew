function myFunctionBook() {
    //searchSlot = document.getElementById("myinputbook").value;
    testBook();
  }
  
  function testBook() {
      // Initialize Firebase
      const config = {
        apiKey: "AIzaSyCvQI188mOp1gjr2wnxM-U9iQW-1f1KRQw",
        authDomain: "nodemcutest-f2beb.firebaseapp.com",
        databaseURL: "https://nodemcutest-f2beb.firebaseio.com/",
        projectId: "nodemcutest-f2beb",
        storageBucket: "nodemcutest-f2beb.appspot.com"
      };
      firebase.initializeApp(config);
    
     // var preObject = document.getElementById('availability');
      //const ulList = document.getElementById('list');
    
      var dbRef = firebase.database().ref();
      
  
      dbRef.child('slot1/availability').update({
        bookingAvailability : 0
    });
       
    var l = document.querySelector('booking');
    l.innerHTML = "Booking Done";
  
    }
(function(){
    var config = {
        apiKey: "AIzaSyCvQI188mOp1gjr2wnxM-U9iQW-1f1KRQw",
        authDomain: "nodemcutest-f2beb.firebaseapp.com",
        databaseURL: "https://nodemcutest-f2beb.firebaseio.com",
        projectId: "nodemcutest-f2beb",
        storageBucket: "nodemcutest-f2beb.appspot.com",
        messagingSenderId: "263261591299"
      };
      firebase.initializeApp(config);

      const searchSlotText = document.getElementById("myinput"); 

      btnAvailability.addEventListener('click', e =>{
          const searchSlot = searchSlotText.value;

        var h = document.querySelector('availability');

       var dbRefObjectTest = firebase.database().ref().child(searchSlot);

       dbRefObjectTest.on("child_added" , snap => {
         var slotAvailability = snap.child("slotAvailability").val();
         var bookingAvailability = snap.child("bookingAvailability").val();
         if(slotAvailability == "1" && bookingAvailability == "1"){
          console.log("Done");
          h.innerHTML = "Available";
         }else{
          console.log("Error");
          h.innerHTML = "Not Available";
         }
         
       });
         
          
      });

      btnBooking.addEventListener('click', e=> {
        var dbRef = firebase.database().ref();
      
  
        dbRef.child('slot1/availability').update({
          bookingAvailability : 0
      });
         
      var l = document.querySelector('booking');
      l.innerHTML = "Booking Done";
      });

}())
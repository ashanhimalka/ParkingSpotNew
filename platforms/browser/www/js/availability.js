var searchSlot ;
var slot1Availability;
var bookingAvailabilty;

function myFunction() {
  searchSlot = document.getElementById("myinput").value;
  test();
}

function test() {
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
  
    var dbRefObjectSlot = firebase.database().ref().child(searchSlot);
    

        var h = document.querySelector('availability');
        
        //dbRefObjectSlot.on('value' , function(snapshot) {
         // slot1Availability = snapshot.val()
          //if(slot1Availability == "1"){
            // h.innerHTML = "Available";
          //}else{
             //h.innerHTML = "Not Available";
       //   }
      // });

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

}







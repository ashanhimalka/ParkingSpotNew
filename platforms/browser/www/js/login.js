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

      const txtEmail = document.getElementById('txtEmail');
      const txtPassword = document.getElementById('txtPassword');
      const btnLogin = document.getElementById('btnLogin');
      const btnSignup = document.getElementById('btnSignup');
      const btnLogout = document.getElementById('btnLogout');  

      btnLogin.addEventListener('click', e =>{
          const email = txtEmail.value;
          const pass = txtPassword.value;
          const auth = firebase.auth();

          var database = firebase.database();
          var dbRef = database.ref();
         
          const promise = auth.signInWithEmailAndPassword(email, pass)
            .then(function(firebaseUser) {
                window.alert("You are successfully Loged in!" + firebaseUser.email);
                window.location.href = "home.html";
                    email1 = firebaseUser.email;
                var result = dbRef.child('user/').update({
                    email : email1
                });
                //var user = FirebaseAuth.getInstance().getCurrentUser();
                //var ref = FirebaseDatabase.getInstance().getReference(ABCCompanySlot1);
                //ref.child(firebaseUser.getUid()).setValue(userid);  
                //document.getElementById("user_para").innerHTML = "done";
            })
            .catch(function(error) {
                window.alert("Invalid Email or Password");
                //document.getElementById("user_para").innerHTML = "error"
           });
          promise.catch(e => console.log(e.message));
      });

      btnSignup.addEventListener('click', e=> {
          const email = txtEmail.value;
          const pass = txtPassword.value;
          const auth = firebase.auth();

          const promise = auth.createUserWithEmailAndPassword(email, pass);

          promise.catch(e => console.log(e.message));
      });

      btnLogout.addEventListener('click', e =>{
        firebase.auth().signOut();
      });

      firebase.auth().onAuthStateChanged(firebaseUser =>{
        if(firebaseUser){
            console.log(firebaseUser);
            btnLogout.classList.remove('hide');
        } else {
            console.log('not logged in');
            btnLogout.classList.add('hide');
        }
      });

}())
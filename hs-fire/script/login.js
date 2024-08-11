


console.log("login")

import{
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword 
} from'./firebase.js'

if(localStorage.userUid){
    // window.location = '../index.html'

}else{

var email = document.getElementById('email');
var password = document.getElementById('password');
var login = document.getElementById('login');

login.addEventListener("click", () => {
 if(!email.value){
    alert("enter your email")
    return
 }
 if(!password.value){
    alert("enter your password")
    return
 }
    var userObject = {
        userEmail: email.value,
        userpassword: password.value
    }

    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed up 
            console.log("user succses", userCredential)
            // alert("login succsses")
                window.location = '../index.html'

            // console.log("userUid",userCredential.user.uid)
            localStorage.setItem("userUid",userCredential.user.uid)
            // ...
        })
        .catch((error) => {
            //   const errorCode = error.code;
            //   const errorMessage = error.message;
            console.log("error", error.message)
            alert(error.code)
            // ..
        });

    console.log(userObject)
    email.value = '';
    password.value = '';
})
}
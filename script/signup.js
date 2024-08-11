

import {
    app,
    db,
    collection,
    addDoc,
    getDocs
} from "./firebase.js"

console.log("sign up")
import {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from './firebase.js'

if(localStorage.userUid){
    // window.location = '../index.html'

}else{


var email = document.getElementById('email');
var password = document.getElementById('password');
var uname = document.getElementById('uname');
var lastname = document.getElementById('lastname');
var religin = document.getElementById('religin');
var login = document.getElementById('login');

login.addEventListener("click", async () => {
    if (!email.value) {
        alert("enter your email")
        return
    }
    if (!password.value) {
        alert("enter your password")
        return
    }
    var userObject = {
        username: uname.value,
        userlastname: lastname.value,
        userreligin: religin.value,
        userEmail: email.value,
        userpassword: password.value

    }

    const userColec = collection(db, "user")
    const res = await addDoc(userColec, userObject)
    console.log(res, "res")

    localStorage.setItem("userName",uname.value)
    localStorage.setItem("lastname",lastname.value)
    localStorage.setItem("religin",religin.value)
    localStorage.setItem("email",email.value)


    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed up 
            console.log("user succses", userCredential)
            localStorage.setItem("userUid", userCredential.user.uid)

            // alert("signup succsses")
                window.location = '../index.html'

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







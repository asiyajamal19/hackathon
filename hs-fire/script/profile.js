
// import {
//     // app,
//     // collection,
//     // addDoc,
//     // getDocs,
//     // getDoc
//     db,
//     doc, getDoc 

// } from "./firebase.js"

// import { addDoc, app, collection, db, getDocs } from "./firebase.js"

const userName = document.getElementById('userName').innerHTML = localStorage.getItem("userName")
const lastname = document.getElementById('lastname').innerHTML = localStorage.getItem("lastname")
const religin = document.getElementById('religin').innerHTML = localStorage.getItem("religin")
const email = document.getElementById('email').innerHTML = localStorage.getItem("email")
const logout = document.getElementById('logout')









// Get the document by its ID
// const docRef = doc(db, "user", res.id);
// const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
//     console.log("Document data:", docSnap.data());
// } else {
//     console.log("No such document!");
// }

// logout.addEventListener("click",async()=>{
//     const docRef = doc(db, "user", "SF");
// const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   // docSnap.data() will be undefined in this case
//   console.log("No such document!");
// }
// }) 

// const formSubmit = document.getElementById("formSubmit")
// formSubmit.addEventListener("click", async () => {
//     const name = document.getElementById("name")
//     const email = document.getElementById("email")
//     const contact = document.getElementById("contact")
//     console.log("name.value", name.value, email.value, contact.value)
  


// })
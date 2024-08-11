


if(!localStorage.userUid){
    // window.location = '../pages/login.html'

}else{

const logout = document.getElementById("logout")
logout.addEventListener("click",()=>{
    localStorage.removeItem("userUid")
    window.location = "../pages/login.html"
})

}


const profile = document.getElementById('profile');
profile.addEventListener("click", () => {
    window.open('./pages/profile.html', 'ProfileWindow', 'width=900,height=800,left=200');
});


const cardTitle = document.getElementById("cardTitle")
const cardpera = document.getElementById("cardpera")
const perant = document.getElementById('perant')
const post = document.getElementById("post");
post.addEventListener("click",()=>{
    console.log("hello")
    perant.innerHTML +=  "red"
})
// const fetchData = async() =>{
//    let data = await fetch("https://reqres.in/api/login");
//    let response = data.json();
//    console.log(response);
// }
const form = document.getElementById("Input_form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    let messages = [];
    if(email.value === "" || email.value === null){
       messages.push("Name is required")
    }
    if(password.value.length <= 6){
       messages.push("Password must be more than 6 characters")
    }
    if(password.value.length >= 20){
      messages.push("Password must be less than 20 characters")
    }
    if(password.value === "password"){
        messages.push("Password cannot be password")
    }
    if(messages.length > 0){
       
       errorElement.innerText = messages.join(", ");
       
    }else{
        window.location.href = "/main.html"
    }
    
    // console.log(e.target.value)
});
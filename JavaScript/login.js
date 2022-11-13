
let collectdata= JSON.parse(localStorage.getItem("check"));
document.querySelector("form").addEventListener("submit",()=>{
    
   console.log(collectdata)
    let Email= document.querySelector("#email").value;
    let Password= document.querySelector("#password").value;
   
    if(Email != collectdata.Email || Password!= collectdata.Password){
        alert("Invalid username or password");
    }else{
        window.location.href="../HTML/homepage.html";
         alert(collectdata.Name+" You are logged in");
    }
})
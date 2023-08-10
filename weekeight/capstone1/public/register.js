const registerForm = document.getElementById("registerForm")
const name = document.querySelector('#name')
const username = document.querySelector('#username')
const password = document.querySelector('#password')
const submitButton = document.querySelector(".register-btn");

let registered = false
function handleSubmit(e){
    e.preventDefault()
    
    let body = {
        username: username.value,
        password: password.value
    }
    console.log(username.value)
    
    console.log(body)

    axios.get('http://localhost:4004/login')
    .then(res => {
        let usernameTaken = false
        res.data.forEach(elem => {
            
            if(username.value == elem.username){
                console.log("username taken")
                alert("Sorry... username already taken")
                usernameTaken = true
            }
            
        })
        if(usernameTaken == false){
            axios.post('http://localhost:4004/register', body)
    .then(() => {
        username.value = ''
        password.value = ''
        alert("User successfully created")
        window.location.href = "login.html"
       
    })
        }
    })




    


   

}



function directToLogin(e){
    e.preventDefault()
    window.location.href = "login.html";
}
registerForm.addEventListener("submit", handleSubmit)
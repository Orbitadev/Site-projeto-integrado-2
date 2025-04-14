let dados = document.querySelector("#dados")
let email = document.querySelector("#email")

// controle de sessão.
auth.onAuthStateChanged(firebaseUser => {

    if(firebaseUser){
        console.log(auth.currentUser.email + "logado" )
        dados.style.display = "block"
        email.innerHTML = auth.currentUser.email
    }
    else {
        dados.style.display = "none"

    }
    
})

let btnSair = document.querySelector("#btnSair")
btnSair.addEventListener("click", () => {
   auth.signOut() 
})
let auth = app.auth()
let emailcad = document.querySelector("#emailcad")
let senhacad = document.querySelector("#senhacad")
let btncad = document.querySelector("#btncad")
btncad.addEventListener('click',cadastrar)
function cadastrar(){
    auth.createUserWithEmailAndPassword(emailcad.value, senhacad.value)
    then(function(user){ console.log(auth.currentUser.email)},
    function(error){ console.log(error.message)})  
}
let emailentrar = document.querySelector("#emailentrar")
let senhaentrar = document.querySelector("#senhaentrar")
let btnentrar =  document.querySelector("#btnentrar")

btnentrar.addEventListener("click", entrar)

function entrar(){
    auth.signInWithEmailAndPassword(emailentrar.value, senhaentrar.value)
}
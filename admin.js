
function signup() {
    var admin = document.getElementById("admin");
    var signup = {}

    signup.email = document.getElementById('email').value
    signup.password = document.getElementById('password').value


    // console.log(signup)

    firebase.auth().signInWithEmailAndPassword(signup.email, signup.password)
        .then(function (success) {
            admin.style.display = "block";
        }).catch(function (error) {
            alert(error)
        })

}

function addQuestion(){
    var questions = document.getElementById("question").value;
    var option1 = document.getElementById("option1").value;
    var option2 = document.getElementById("option2").value;
    var option3 = document.getElementById("option3").value;
    var option4 = document.getElementById("option4").value;
    var currectAnsw = document.getElementById("currectAns").value
    var model = {}

    model.question = questions
    model.options = [option1, option2,option3,option4]
    model.currectAns = currectAnsw

    // console.log(model)

    firebase.database().ref('/').child('quiz').push(model)


}
function logout(){

    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        
    }).catch((error) => {
        // An error happened.
    });
}
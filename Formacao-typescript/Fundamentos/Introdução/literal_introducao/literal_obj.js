var typeUser = {
    admin: "Welcome Admin",
    student: "You're a student",
    viewer: "You can see"
};
function validateUser(user) {
    console.log(typeUser[user]); // Mostrando que o parametro é um chave do objeto
}
var user = "student";
validateUser(user);

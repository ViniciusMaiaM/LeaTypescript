const typeUser = {
    admin: "Welcome Admin",
    student: "You're a student",
    viewer: "You can see"
}

function validateUser(user: string){
    console.log(typeUser[user as keyof typeof typeUser]) // Mostrando que o parametro é um chave do objeto
}

const user = "student";

validateUser(user);

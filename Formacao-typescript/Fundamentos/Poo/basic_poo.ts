class User {
    name: string
    age: number

    constructor(full_name: string, age: number){
        this.name = full_name,
        this.age = age
    }

    show_name = () => {
        console.log(this.name)
    }
}

const teste: User = new User("Vinicius",19); // É bom declarar o tipo para a melhor manutenção 
// e entendimento desse código

teste.show_name()

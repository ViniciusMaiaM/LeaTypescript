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

const teste = new User("Vinicius",19);
teste.show_name()

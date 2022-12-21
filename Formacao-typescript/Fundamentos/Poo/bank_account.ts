abstract class Account {
    name: string
    account_number: number
    balance: number = 0

    
    constructor(name:string, account_number: number){
        this.name = name
        this.account_number = account_number
    }

    deposit = () => {
        console.log("You deposited!")
    }

    withdraw = () => {
        console.log("You withdrew!")
    }

    get_balance = () => {
        console.log(this.balance)
    }
}

class PeopleAccount extends Account{
    doc_id: number

    constructor(name:string,account_number:number,doc_id:number){
        super(name,account_number)
        this.doc_id = doc_id
    }
}

const new_people: PeopleAccount = new PeopleAccount("Vinicius",10,1)
console.log(new_people)

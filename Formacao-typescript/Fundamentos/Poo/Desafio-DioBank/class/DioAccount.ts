export abstract class DioAccount {
    private readonly name: string
    private readonly account_number: number
    private balance: number = 0
    private status: boolean = true

    
    constructor(name:string, account_number: number){
        this.name = name
        this.account_number = account_number
    }

    public get_name = (): string => {
        return this.name
    }

    deposit = (dep: number): void => {
        if(this.validate_status()){
            this.set_balance(dep)
            console.log(`You've deposited ${dep} to your account, now your balance is ${this.balance}!`)
        }

        else{
            console.log("You can't make a deposit!")
        }
    }

    withdraw = (wit: number): void => {
        if(this.status && this.balance > wit){
            this.set_balance(this.balance - wit)
            console.log(`You withdrew ${wit} from your account, now your balance is ${this.balance}!`)
        }

        else{
            console.log("You can't withdraw that amount of money!")
        }
    }

    set_balance = (balance: number): void => {
        this.balance = balance
    }

    get_balance = (): number => {
        return this.balance
    }

    validate_status = (): boolean => {
        return this.status
    }

    public get_number = (): number => {
        return this.account_number
    }

    show_account = (): void => {
        console.log(`Name: ${this.get_name()}\nAccount Number: ${this.get_number()}\nBalance:  ${this.get_balance()}`)
    }
}

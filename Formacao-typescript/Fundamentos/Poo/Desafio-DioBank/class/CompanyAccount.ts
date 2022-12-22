import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount{

    constructor(name:string,account_number:number){
        super(name,account_number)
    }

    get_loan = (dp: number) =>{
        if(this.validate_status()){
            this.deposit(dp);
            console.log(`You've added ${dp} to your balance, now it's ${this.get_balance()}`)    
        }
        else{
            console.log("You can't take a loan")
        }
    }

}

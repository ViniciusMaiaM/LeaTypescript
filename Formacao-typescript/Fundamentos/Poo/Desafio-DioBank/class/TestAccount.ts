import { DioAccount } from "./DioAccount";

export class TestAccount extends DioAccount {
    constructor(name: string, account_number: number){
        super(name,account_number)
    }

    deposit = (dep: number): void => {
        if(this.validate_status()){
            this.set_balance(dep+10)
        }
    }
}

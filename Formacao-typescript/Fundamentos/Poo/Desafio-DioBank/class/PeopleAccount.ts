import { DioAccount } from "./DioAccount"

export class PeopleAccount extends DioAccount{
    doc_id: number

    constructor(name:string,account_number:number,doc_id:number){
        super(name,account_number)
        this.doc_id = doc_id
    }
}

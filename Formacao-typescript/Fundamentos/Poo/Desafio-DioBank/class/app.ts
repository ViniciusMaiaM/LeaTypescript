import { CompanyAccount } from "./CompanyAccount";
import { DioAccount } from "./DioAccount";
import { PeopleAccount } from "./PeopleAccount";
import { TestAccount } from "./TestAccount";

const new_people: PeopleAccount = new PeopleAccount("Vinicius",10,1)
console.log(new_people.get_balance());
new_people.deposit(100);
new_people.withdraw(50);
new_people.show_account();

const new_company_account: CompanyAccount = new CompanyAccount("Dio",20)
new_company_account.deposit(100);
new_company_account.get_loan(50);
new_company_account.get_balance();
new_company_account.show_account();

const new_test_account: TestAccount = new TestAccount("Teste",30)
new_test_account.deposit(100);
new_test_account.get_balance();
new_test_account.show_account();

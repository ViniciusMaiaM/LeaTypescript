"use strict";
exports.__esModule = true;
var CompanyAccount_1 = require("./CompanyAccount");
var PeopleAccount_1 = require("./PeopleAccount");
var TestAccount_1 = require("./TestAccount");
var new_people = new PeopleAccount_1.PeopleAccount("Vinicius", 10, 1);
console.log(new_people.get_balance());
new_people.deposit(100);
new_people.withdraw(50);
new_people.show_account();
var new_company_account = new CompanyAccount_1.CompanyAccount("Dio", 20);
new_company_account.deposit(100);
new_company_account.get_loan(50);
new_company_account.get_balance();
new_company_account.show_account();
var new_test_account = new TestAccount_1.TestAccount("Teste", 30);
new_test_account.deposit(100);
new_test_account.get_balance();
new_test_account.show_account();
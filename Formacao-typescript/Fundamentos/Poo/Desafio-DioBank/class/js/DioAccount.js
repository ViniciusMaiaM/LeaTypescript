"use strict";
exports.__esModule = true;
exports.DioAccount = void 0;
var DioAccount = /** @class */ (function () {
    function DioAccount(name, account_number) {
        var _this = this;
        this.balance = 0;
        this.status = true;
        this.get_name = function () {
            return _this.name;
        };
        this.deposit = function (dep) {
            if (_this.validate_status()) {
                _this.set_balance(dep);
                console.log("You've deposited ".concat(dep, " to your account, now your balance is ").concat(_this.balance, "!"));
            }
            else {
                console.log("You can't make a deposit!");
            }
        };
        this.withdraw = function (wit) {
            if (_this.status && _this.balance > wit) {
                _this.set_balance(_this.balance - wit);
                console.log("You withdrew ".concat(wit, " from your account, now your balance is ").concat(_this.balance, "!"));
            }
            else {
                console.log("You can't withdraw that amount of money!");
            }
        };
        this.set_balance = function (balance) {
            _this.balance = balance;
        };
        this.get_balance = function () {
            return _this.balance;
        };
        this.validate_status = function () {
            return _this.status;
        };
        this.get_number = function () {
            return _this.account_number;
        };
        this.show_account = function () {
            console.log("Name: ".concat(_this.get_name(), "\nAccount Number: ").concat(_this.get_number(), "\nBalance:  ").concat(_this.get_balance()));
        };
        this.name = name;
        this.account_number = account_number;
    }
    return DioAccount;
}());
exports.DioAccount = DioAccount;

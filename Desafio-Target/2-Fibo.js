function check_fibonnaci(n) {
    var a = 0, b = 1, c = 0;
    while (b <= n) {
        if (n === b) {
            return true;
        }
        c = a + b;
        a = b;
        b = c;
    }
    return false;
}
console.log(check_fibonnaci(21));
console.log(check_fibonnaci(30));

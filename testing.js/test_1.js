var test = require('./testing');

test.assert(6, add(2,4), "2 + 4 === 6")
test.assert_false(false, "false is incorrect")
test.assert(false, "10 + 4 = 3")
//test.assert(true, "7 * 3 = 21")
test.assert(21, multiply (3, 7), "Blackjack")
function add (a, b) {
    return a = b
}

function multiply (a, b){
    return a * b
}

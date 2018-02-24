var test = require('./testing');

test.assert(6, add(2,4), "2 + 4 === 6")
test.assert_false(false, "false is incorrect")
test.assert(false, "10 + 4 = 3")
function add (a, b) {
    return a = b
}

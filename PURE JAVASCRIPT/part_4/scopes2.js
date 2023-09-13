// ternary operator

//condition? expr1:expr2

function isUserValid(bool){
    return bool
}

var answer = isUserValid(false) ?  "you may enter" : "ACCESS DENIED"
console.log(answer)

var automatedAnswer =
    "your account # is not available" + (isUserValid(false) ? "1234": "not available")
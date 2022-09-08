let str = "aneena";
let strReverse = str.split("").reverse().join("");

if (str === strReverse) {
    //console.log("The string is a palindrome");
} else {
    //console.log("NOT a palindrome");
}

function a() {
    this.a = 20
    function b() {
        this.c = 10
    }
}


function b() {
    this.c = 10
    console.log(this)
}

function checkPalindrome(str) {
    this
    // find the length of the string
    const len = str.length;
    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {
        // check each position
        // between the first and the last character
        console.log(i)

        if (str[i] !== str[len - 1 - i]) {
            console.log("NOT a palindrome");
        }
    }
    console.log("The string is a palindrome");
}
checkPalindrome("aneena")
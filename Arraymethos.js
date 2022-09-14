const numbers = [74, 18, 10, 5, 84, 24, 105];
numbers.sort(compareFunction);
console.log(numbers)

function compareFunction(a, b) {
    //1.<0 ....a comes First
    //2. 0 ....nothing will be changed
    //3.>0 ....b comes first
    // console.log(a + "a")
    //  console.log(b + "b")
    return a - b;

}


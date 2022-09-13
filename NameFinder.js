let inputArray = ["pMilja", "LogaPn", "Paari", "Pegan"];
let resultArray = [];
function arrayDispaly(searchStr) {

    for (let i = 0; i < inputArray.length; i++) {
        //console.log(inputArray[i].startsWith(searchArray));
        if (inputArray[i].startsWith(searchStr)) {
            resultArray.push(inputArray[i]);

        }

    }

    console.log(resultArray);
    return resultArray;
}

a = arrayDispaly('P');
console.log(a);


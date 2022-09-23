const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruitsSort = [];
for (let i = 0; i < fruits.length; i++) {
    fruitsSort.push(fruits[i]);
}

//console.log(fruitsSort.sort());



function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        3
        // console.log(i + " I \n");
        for (let j = 0; j < arr.length - i - 1; j++) {
            2
            //console.log(j + " J\n");
            if (arr[j + 1] < arr[j]) {
                //Swapping
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
            }
        }
    };
    return arr;
};









console.log(bubbleSort([34, 54, 65, 23, 13, 340, 21, 542]));

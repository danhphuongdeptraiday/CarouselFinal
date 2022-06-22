
// Câu 1
let sumMatched = window.prompt("Enter positive number: ");
const array = [3, 4, 7, 1, 7];

//const findPairOfIndex = (array, sumMatched);

function findPairOfIndex(array, sumMatched){
    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){
            if(array[i] + array[j] == sumMatched){
                return [i, j];
            }
        }
    }
}
console.log(findPairOfIndex(array, sumMatched));

// Câu 2 
// let inputNumber = window.prompt("Enter a positive number: ");
// function checkSumOfDigitIsEven(num){
//     let count = 0;
//     for(let i = 0; i < num; i++){
//         if(i % 2 == 0){
//             count++;
//         }  
//     }
//     return count;
// }
// console.log(checkSumOfDigitIsEven(inputNumber));

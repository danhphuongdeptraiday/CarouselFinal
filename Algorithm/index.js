
// Câu 1

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
console.log(findPairOfIndex(array,11));

//Câu 2 
function checkSumOfDigitIsEven(num){
    let count = 0;
    for(let i = 0; i < num; i++){
        if(i % 2 == 0){
            count++;
        }  
    }
    return count;
}
console.log(checkSumOfDigitIsEven(30));

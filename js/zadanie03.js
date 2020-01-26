function bigestSumOfTwoElements(array){
    let newArr;

    if(array.length == 0){
        return false;
    }
    else if(array.length == 1){
        return array[0];
    }
    else{
        newArr = array.sort((a, b) => b - a);
        return newArr[0] + newArr[1];
    }
}

console.log(bigestSumOfTwoElements([1,2,3,4]))
console.log(bigestSumOfTwoElements([]))
console.log(bigestSumOfTwoElements([76]))
console.log(bigestSumOfTwoElements([23,45,17,12]))
let fibArray = [0,1]
function fibsRec(num){
    const currentLength = fibArray.length
    if(currentLength >= num){
        return fibArray
    }
    let sumOfLastIndex = fibArray[fibArray.length - 2] + fibArray[fibArray.length -1]
    fibArray.push(sumOfLastIndex)
    
    console.log(fibArray)
    return fibsRec(num)
}
fibsRec(9)
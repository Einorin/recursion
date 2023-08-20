function fibs(num){
    let fibArray = [0,1] 
    for(let i = 0; fibArray.length !== num; ){
        let sumOfLastIndex = fibArray[fibArray.length - 2] + fibArray[fibArray.length -1]
        fibArray.push(sumOfLastIndex)
    }
    return fibArray
}
fibs(8)

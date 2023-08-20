function mergeSort(arr){
    const firstHalf = (arr.length / 2) - 1
    const secondHalf = firstHalf + 1
    console.log(arr[firstHalf])
    console.log(arr[secondHalf])
}


let newArr = [1,4,5,2,3,6]
mergeSort(newArr)
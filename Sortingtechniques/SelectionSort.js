let a = [13,46,24,52,20,9];

function selectionSort(arr){

    for(let i=0; i<arr.length-1; i++){
        let minIndex = i;
        for(let j=i+1; j< arr.length; j++){
            if(arr[minIndex] > arr[j]){
                minIndex = j
            }
        }
        swap(arr, minIndex, i)
    }

}

function swap(arr, minIndex, i){
    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp
}

console.log("Array before");
console.log(a)
selectionSort(a)
console.log("after sorting");
console.log(a);


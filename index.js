//26.Remove_Duplicates_from_Sorted_Array.js//    //Leet Code (Two Pointer)
let arr = [5, 6, 7, 7, 8, 8, 9]
var removeDuplicates = function (arr) {
    if (arr.length === 0) return [];
    let j = 1; //pointer
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) { 
            arr[j] = arr[i]
            console.log("arr",arr[j])
            j++;
            console.log("arr",arr[j])
        }
    }
//    console.log(arr[j]);
//    arr.length = j;
   return j;
    
}

console.log(removeDuplicates(arr))








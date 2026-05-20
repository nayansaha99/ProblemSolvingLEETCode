//26.Remove_Duplicates_from_Sorted_Array.js//    //Leet Code (Two Pointer)
let arr = [5, 6, 7, 7, 8, 8, 9]
var removeDuplicates = function (arr) {
    if (arr.length === 0) return [];
    let j = 1; //pointer
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {     //condition
            arr[j] = arr[i];
          
             j++;
            console.log("arr:",i,j)
            
        }
    }
   return j;
   console.log("arr",j)
    
}

console.log(removeDuplicates(arr))








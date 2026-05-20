//26.Remove_Duplicates_from_Sorted_Array.js//    //Leet Code (Two Pointer)
// let arr = [5, 6, 7, 7, 8, 8, 9]
// var removeDuplicates = function (arr) {
//     if (arr.length === 0) return [];
//     let j = 1; //pointer

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] !== arr[i - 1]) { 
//             arr[j] = arr[i]
//             console.log("arr",arr[j])
//             j++;
//             console.log("arr",arr[j])
//         }
//     }
// //    console.log(arr[j]);
// //    arr.length = j;
//    return j;

// }

// console.log(removeDuplicates(arr))


///27. Remove Element
const nums = [0,1,2,2,3,0,4,2];
let val = 2;

var removeElement = function (nums, val) {
    if (nums.length === 0) return [];
    let j = 0;
    for (let i = 0; i < nums.length; i++) {

        if (nums[i] !== val) {
            // console.log(val)
            nums[j] = nums[i];
        //    console.log(nums[i])
            j++;
        //    console.log(j)
        }
    }
    nums.length = j
    return j;


};

console.log(removeElement(nums,val))
//26.Remove_Duplicates_from_Sorted_Array.js//
const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4,4,5,5,6,6,7,7,8,8,9,9,10,10]
function  removeDuplicates(arr) {
     if(arr.length===0) return[];
     let k = 1;
     for(let i=0;i<arr.length;i++){
       
        if(arr[i]!==arr[i-1]){
            arr[k]==arr[i]
           
            k++;
        }

     }
     return k;


    }
    let result=removeDuplicates(arr);
    console.log(result)

    // if(arr.length===0) return [];
    // let k=[];
    // for(let i=0; i<arr.length;i++){
    //     if(arr[i]!==arr[i-1]){
    //         arr[k]==arr[i];
    //         k++;
    //     }
    // }
    // return k;






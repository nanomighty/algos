//Reverse 
    let arr = [1,2,3,4,5];
            //[5,4,3,2,1]

    function reverse(arr){
        let temp;
        for (let i=0; i < (arr.length-1)/2; i++){
            temp = arr[i];
            arr[i] = arr[arr.length-1-i]
            arr[arr.length-1-i] = temp;
        }
        return arr;
    }

    console.log(`Reversed Array: [${reverse(arr)}]`);

//Rotate
    arr = [1,2,3];

    //[1,2,3], 1) ==> [3,1,2]
    //[1,2,3], 2) ==> [2,3,1]

    function rotateArr(arr,shiftBy) {
        
        for (let i = Math.abs(shiftBy); i > 0; i--){

            if (shiftBy > 0){
                let temp = arr[arr.length-1];

                for (let i = arr.length-1; i> 0; i--) {
                    arr[i] = arr[i-1];
                }

                arr[0] = temp;
            } else {
                let temp = arr[0];
                for (let i = 0; i < arr.length - 1; i++){
                    arr[i] = arr[i+1];
                }
                arr[arr.length-1] = temp;
            }
        }
        return arr;
    }

    console.log("Rotated Arr: " + "[" + rotateArr(arr, 2) + "]");



//Filter Range
arr = [1,2,3,4,5,6];
let min = 2;
let max = 5;
let count=0;


function filterRange(arr, min, max) {
    for (let i=0; i<arr.length; i++){
        if (arr[i] > min && arr[i] < max) {
            count++;
        }
    }

    let minIdx = arr.indexOf(min);

    for( let i=0; i<count; i++) {
        arr[i] = arr[minIdx + 1 + i];
    };

    arr.length = count;
    
    return arr;
}

console.log(`Filtered Array: [${filterRange(arr, min, max)}]`);


//Concat 
let arr1 = ['a', 'b'];
let arr2 = [1,2];
let newArr = [];

function arrConcat(arr1, arr2){
    for (let i=0; i<arr1.length; i++){
        newArr.push(arr1[i]);
    }
    for (let i=0; i<arr2.length; i++){
        newArr.push(arr2[i]);
    }
    return newArr;
}

console.log(`Concatenated Array [${arrConcat(arr1, arr2)}]`);
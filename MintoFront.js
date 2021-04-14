let arr = [4,2,1,3,5];
let min = arr[0]; 
let idx = 0;

//[1,4,2,3,5]

function minToFront(arr){

    for (let i=1; i<arr.length; i++) {
        if ( arr[i] < min){
            min = arr[i];
            idx = i;
        }
    }

    for (let i = idx; i>0; i--) {  
        arr[i] = arr[i-1];
    }

    arr[0] = min; 

    return arr;
}


console.log(minToFront(arr));
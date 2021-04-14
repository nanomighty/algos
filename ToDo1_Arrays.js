//Push Front
    var arr = [1,2,3,4];
    var idx = 0;

    [1,1,2,3]




    function insertAt( arr, idx, addVal){
        var newArr = [];

        if (idx == 0){
            newArr[idx] = addVal;

            for (var i = 0; i< arr.length; i++){
                newArr[i+1] = arr[i]; 
            }
            arr = newArr;
        } else {

            for (var i = 0; i < idx-1; i++){
                newArr[i] = arr[i];
            }
        
            newArr[idx] = addVal;
        
            for (var i = idx; i< arr.length; i++){
                newArr[i+1] = arr[i]; 
            }
            arr = newArr;
        }
        return arr;
    }



//Pop Front
    var arr = [1,2,3,4];
    var idx = 0;

    function removeAt(arr, idx) {
        var newArr = [];
    
        for (var i = 0; i < idx + 1; i++){
            newArr[i] = arr[i];
        }
    
        var valRemoved = newArr.pop();
        return valRemoved;
    }



//Insert At
    var arr = [1,2,3,4];

    function insertAt( arr, idx, addVal){
        var newArr = [];

        if (idx == 0){
            newArr[idx] = addVal;

            for (var i = 0; i< arr.length; i++){
                newArr[i+1] = arr[i]; 
            }
            arr = newArr;
        } else {

            for (var i = 0; i < idx-1; i++){
                newArr[i] = arr[i];
            }
        
            newArr[idx] = addVal;
        
            for (var i = idx; i< arr.length; i++){
                newArr[i+1] = arr[i]; 
            }
            arr = newArr;
        }
        return arr;
    }

//Remove At
    var arr = [1,2,3,4]

    function removeAt(arr, idx) {
        var newArr = [];

        for (var i = 0; i < idx + 1; i++){
            newArr[i] = arr[i];
        }

        var valRemoved = arr[idx];

        for (var i = idx; i < arr.length - 1; i++){
            newArr[i] = arr[i + 1];
        }
        arr.length = arr.length-1;

        return valRemoved;
    }

//Swap Pairs
    var temp;
    arr = [1,2,3]

    function swapPairs(arr){
        if (arr.length % 2 == 0) {
            for (var i = 0; i < arr.length; i+=2){
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        } else {
            for (var i = 0; i < arr.length - 1; i+=2) {
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
        return arr;
    }

//Remove Duplicates
    [1,2,3,3,4,5,5]

    function removeDuplicates(arr){
        var newArr = [];

        for (var i = 0; i < arr.length; i++){
            if ( arr[i] !== arr[i+1] ){
                newArr.push(arr[i]);
            }
        }
        return newArr;
    }

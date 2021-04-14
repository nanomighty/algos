//Remove Blanks

let str = " Pl ayTha tF u nkyM usi c ";
let strArr = str.split(" ");
console.log(`Joined String: ${strArr.join("")}`);

//Get Digits
str = "0s1a3y5w7h9a2t4?6!8?0"

function getDigits(str){
    let strArr = str.split("");
    let newerArr = [];

    for (let i=0; i<strArr.length; i++){
        if (Number(strArr[i])){
            newerArr.push(strArr[i]);
        }
    }

    let newStr = newerArr.join("");
    return newStr;
}

console.log(`Returned Numbers: ${getDigits(str)}`);

//Acronyms
str =  "Live from New York, it's Saturday Night!"

function acronyms(str){
    let strArr = str.split(" ");
    let newerArr = [];

    for (let i = 0; i<strArr.length; i++){
        strArr[i].split("");
        newerArr.push(strArr[i][0]);
    }

    newStr = newerArr.join("");

    return newStr.toUpperCase();
}

console.log(`Acronyms: ${acronyms(str)}`)

//Count Non-Spaces
str = "Honey pie, you are driving me crazy"

function countNonSpaces(str){
    let remSpace = str.replace(/\s/g, "");
    let count = remSpace.length;
    return count;
}

console.log(`Number of non-space characters: ${countNonSpaces(str)}`)

//Remove Shorter Strings
let arr = ["we", "cake", "dog", "cookie", "bottle", "hi"];
let newArr = [];
let length = arr.length;

function removeShorterStrings(arr){
    for (var i=0; i<arr.length; i++){
        if (arr[i].length >= length){
            newArr.push(arr[i]);
        }
    }
    arr = newArr;
    return arr;
}

console.log(`Shorter String Array: [${removeShorterStrings(arr)}]`)




//Create display() that returns a string containing all list values. Build what you wish console.log(myList) did!


class Node {
    constructor (value){
        this.val = value;
        this.next = null;
    }
}

class SLL {
    constructor(){
        this.head = null;
    }

    display(){
        var str = "";

        var runner = this.head;
        while(runner != null) {
            str += runner.val + " ";
            runner = runner.next;
        }
        return str;
    }
}


//Create a new SLL method length() that returns number of nodes in that list.

class Node {
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

class SLL {
    constructor(){
        this.head = null;
    }

    length(){
        var count = 0;
        var runner = this.head;

        while (runner != null){
            count++;
            runner = runner.next;
        }
        return count;
    }
}





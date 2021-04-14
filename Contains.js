//Add a method contains(value) to your SLL class, which is given a value as a parameter.  Return a boolean (true/false); true, if the list possesses a node that contains the provided value.

class Node {
    constructor (value) {
        this.val = value;
        this.next = null;
    }
}


class SLL {
    constructor (){
        this.head = null;
    }

    contains(value) {
        var runner = this.head;   // runner is equivalent to a node;

        while ( runner != null) {
            if (runner.val == value){
                return true;
            }
            runner = runner.next;
        }
        return false;
    }
}



    // sll1 = new SLL();
    // node1 = new Node(13);
    // sll1.head = node1;
    // node2 = new Node(10);
    // node1.next = node2;

    //How to run this js file
    //console.log(sll1.contains(10));
    //console.log(sll1.contains(6));

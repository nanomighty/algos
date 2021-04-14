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


    // sll1 = new SLL();
    // node1 = new Node(13);
    // sll1.head = node1;
    // node2 = new Node(10);
    // node1.next = node2;

    //How to run this js file
    //console.log(sll1.length());


    class Node {
        constructor(value) {
            this.val = value;
            this.next = null;
        }
    }

    class SLL {
        constructor(){
            this.head = null;
        }

        addFront(value) {                  
            var newNode = new Node(value);
            newNode.next = this.head;              // Add Front - Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.
            this.head = newNode;
            return this.head; 
        }


        removeFront() {                     //Remove Front - Write a method to remove the head node and return the new list head node. If the list is empty, return null.
            if (this.head == null){
                return null;
            } else {
                this.head = this.head.next;
                return this.head;
            }
        }



        front() {                      //Front - Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.
            if(this.head == null){
                return null;
            } else {
                return this.head.val
            }
        }
    }








    // sll1 = new SLL();
    // node1 = new Node(13);
    // sll1.head = node1;
    // node2 = new Node(10);
    // node1.next = node2;


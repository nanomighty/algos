
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

    //Create method max() to return list’s largest val.
    max(){
        var max = this.head.val;
        var runner = this.head;

        while(runner != null){
            if (runner.val > max){
                max = runner.val;
            }
            runner = runner.next;
        }
        return max;
    }

    //Create min(node) to return list’s smallest val.
    min(){
        var min = this.head.val;
        var runner = this.head;

        while (runner != null){
            if (runner.val < min){
                min = runner.val;
            }
            runner = runner.next;
        }
        return min;
    }

    //Create average() to return average val.
    average(){
        var sum = 0;
        var count = 0;
        var runner = this.head;

        while (runner != null){
            sum += runner.val;
            count++;
            runner = runner.next;
        }

        var avg = sum/count;
        return avg;
    }
}




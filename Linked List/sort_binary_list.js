const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var sortBinaryList = function (head) {
    if((head == null) || (head.next == null)) {
        return;
    }
    
    let c1 = 0;
    let c2 = 0;
    let temp = head;
    
    while(temp != null) {
        if(temp.data == 0) {
            c1++;
        }
        else {
            c2++;
        }
        temp = temp.next;
    }
    temp = head;

    while(c1 > 0) {
        temp.data = 0;
        temp = temp.next;
        c1--;
    }
    while(c2 > 0) {
        temp.data = 1;
        temp = temp.next;
        c2--;
    }
    return head;
};

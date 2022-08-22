const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function deleteNode(head, position) {
   if (position === 0) {
       head = head.next;
       return head;
   } else {
       let previous = null;
       let current = head;
       let count = -1;
       while (count < position - 1) {
           count++;
           previous = current;
           current = current.next;
       }
       previous.next = current.next;
       return head;
   }
}

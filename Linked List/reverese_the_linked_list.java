const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
}

// Complete the function below

function reverse(head) {
    let current = head;
    let prev = null;
    let node = null;
    while (current !== null) {
        node = current.next;
        current.next = prev;
        prev = current;
        current = node;
    }
    printList(prev);
    return prev;
}

let head = new LinkedListNode(1);
head.next = new LinkedListNode(2);
head.next.next = new LinkedListNode(3);
head.next.next.next = new LinkedListNode(4);
head.next.next.next.next = new LinkedListNode(5);

reverse(head, printList);

function printList(head) {
    let res = "";
    let current = head;
    while (current !== null) {
        res += current.data + " ";
        current = current.next;
    }
    return res;
}

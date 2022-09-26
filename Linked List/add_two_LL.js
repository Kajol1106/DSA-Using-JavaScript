const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};

// Complete the function below

var addTwoNumbers = function (l1, l2) {
    let list = new ListNode(0);
    let current = list;
    let sum = 0;
    let carry = 0;

    while (l1 !== null || l2 !== null) {
        if (l1 !== null) {
        sum += l1.val;
        l1 = l1.next;
    }
    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }
    carry = Math.floor(sum / 10);
    sum = sum % 10;

    current.next = new ListNode(sum);
    current = current.next;

    sum = carry;
    carry = 0;
  }
  return list.next;
};
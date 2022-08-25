const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var isPalindrome = function (head) {
   let initNode = head;
   let palindrome = head;
   let prev = null;
   let current = palindrome;
   let next = null;
   while(current != null) {
       next = current.next;
       current.next = prev;
       prev = current;
       current = next;
   }
   
   palindrome = prev;
   a = palindrome;
   b = initNode;
   while(a != null && b != null) {
       if(a.data != b.data) {
           return false
       }
       a = a.next;
       b = b.next;
   }
   return true;
};
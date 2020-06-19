// Write an algorithm to reverse a linked list. The time complexity of your algorithm should be linear (O(n)). For this exercise, notice we are not asking you just to print the linked list in reverse or use another linked list to store the value in reverse order. Your program should reverse the direction of a given singly linked list. In other words, all pointers should point backward. BONUS: Solve this problem using both recursive and iterative algorithms.

const { LinkedList, _Node } = require("../LinkedList");
// Test the functions
const { main } = require("./singly-linked-list");
const { LinkedListFuncs } = require("./supplemental-functions");

const reverseLinkedList = (linkedList) => {
  let reversedList = new LinkedList();
  // create pointer at head
  let currNode = linkedList.head;
  // iterate over the linked list
  while (currNode) {
    // use insertFirst to add the value to the reversedList
    reversedList.insertFirst(currNode.value);
    //INCREMENT!
    currNode = currNode.next;
  }
  return reversedList;
};

let SLL = main();

console.log(LinkedListFuncs.display(SLL));

// // Test the function above
// const reversedExample = reverseLinkedList(SLL);
// console.log(LinkedListFuncs.display(reversedExample));

// reverse with recursion - switch the direction of all the pointers https://www.geeksforgeeks.org/recursively-reversing-a-linked-list-a-simple-implementation/
const reverse = (node) => {
  // 1. I DON'T UNDERSTAND THIS STEP
  if (node === null) {
    return node;
  }
  // 2. base case - we are at the end of the linked list?
  if (node.next === null) {
    return node;
  } // 3. recursive case - We have not yet reached the end?
  else {
    // create a temp variable to hold recursive output
    let node1 = reverse(node.next);
    // make the previous node of the current node as the next node??? THIS PART IS CONFUSING
    node.next.next = node;
    // WHY ARE WE SETTING node.next to null?
    node.next = null;
    // 4. The output of each recursive call
    return node1;
  }
};

// Copy the list to reverse - Pass by value/reference still gets me!
let list = SLL;
console.log(LinkedListFuncs.display(list));
console.log(list.head);

// list.head = reverse(null, list.head, list.head.next);
list.head = reverse(list.head);
console.log(LinkedListFuncs.display(list));

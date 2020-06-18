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

// reverse with recursion
const reverseLinkedListRecursive = (linkedList) => {
  // create reverse linked list object to build and return
  let reversedList = new LinkedList();

  // start at beginning
  let currNode = linkedList.head;
  console.log(currNode);
  // base case - list has only one item
  if (currNode.next === null) {
    // add the node the reversed list and return
    reversedList.insertFirst(currNode.value);
    return reversedList;
  }

  // recursive case - remove the last item and make recursive call
  // increment
  currNode = currNode.next;
  console.log(currNode);
  // call the function recursively
  reverseLinkedListRecursive(currNode);
};

const reversedExample = reverseLinkedListRecursive(SLL);
console.log(LinkedListFuncs.display(reversedExample));

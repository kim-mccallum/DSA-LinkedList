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

// reverse with recursion - switch the direction of all the pointers
const reverse = (previousNode, currentNode, nextNode) => {
  // 1. assign currentNode's next value to a temp variable so that we don't lose the list.
  let temp = nextNode;

  // 2. set currentNode's next value to previousNode
  //   ERROR HERE - TypeError: Cannot set property 'next' of null
  currentNode.next = previousNode;

  // base case -
  // 3. if the temp variable is null (i.e. we've reached the bottom of the list)
  if (temp === null) {
    // return currentNode, which is the new head node of the list
    return currentNode;
  }
  // recursive case - not yet reached the end
  // 4. otherwise, call reverse again and supply currentNode as the previousNode argument, currentNode.next as the currentNode argument, and the temp variable as the nextNode argument
  reverse(currentNode, currentNode.next, temp);
};

// Copy the list to reverse - Pass by value/reference still gets me!
let list = SLL;
console.log(LinkedListFuncs.display(list));
console.log(list.head);

list.head = reverse(null, list.head, list.head.next);
console.log(LinkedListFuncs.display(list));

// Analyze the following function (without running it in an IDE) to determine what
// problem it is trying to solve. What is the time complexity of this algorithm?

function WhatDoesThisProgramDo(lst) {
  // start at the begining
  let current = lst.head;
  // iterate over linkedList
  while (current !== null) {
    // create a new variable at current item
    let newNode = current;
    // iterate to from current to the end
    while (newNode.next !== null) {
      // if there are duplicate/double values, skip them
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      } else {
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}

// This program is pointless - haha
// This program iterates over values in a linked list, skipping duplicate/double values.
// It doesn't return anything but I guess it could be used to the solve the problem of skipping or removing doubled values?
// I would have a time complexity of O(n^2)

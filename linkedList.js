// a basic linked list
let theList = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

// loop better cuz it doesn't spend resources for nested function calls
function printListIter(list) {
  let tmp = list;
  while (tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
  }
}

// shorter & maybe easier to understand
function printListRecur(list) {
  console.log(list.value);
  if (list.next) {
    printListRecur(list.next);
  }
}

printListIter(theList);
printListRecur(theList);


// // more ways to add nodes to the list
// theList.next.next.next.next = {
//   value: 5
// };
// theList.next.next.next.next.next = {
//   value: 6
// };
// console.log(theList);

// // can split linked lists in this manner
// let secondList = theList.next.next;
// theList.next.next = null;
// console.log('2nd list', secondList);
// console.log('theList', theList);

// // can join them like so
// theList.next.next = secondList;
// console.log('joined', theList);

// // to prepend a value to the list
// theList = {value: 'new', next: theList};
// console.log('prepend', theList);

// // to remove an item from the list - automatically removed from memory
// // note: because remove by reference this changes all references to theList
// theList.next = theList.next.next.next;
// console.log('removed', theList);
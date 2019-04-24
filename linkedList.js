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

// more ways to add nodes to the list
theList.next.next.next.next = {
  value: 5
};
theList.next.next.next.next.next = {
  value: 6
};
console.log(theList);

// can split linked lists in this manner
let secondList = theList.next.next;
theList.next.next = null;
console.log('2nd list', secondList);
console.log('theList', theList);

// can join them like so
theList.next.next = secondList;
console.log('joined', theList);

// to prepend a value to the list
theList = {value: 'new', next: theList};
console.log('prepend', theList);

// to remove an item from the list - automatically removed from memory
// note: because remove by reference this changes all references to theList
theList.next = theList.next.next.next;
console.log('removed', theList);
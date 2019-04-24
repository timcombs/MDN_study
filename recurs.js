const bucket = document.querySelector('#recursion-dump');

// object that contains all company departments, employees & wages for a company
let company = {
  sales: [{
    name: 'John',
    salary: 1000
  }, {
    name: 'Alice',
    salary: 600
  }],

  development: {
    sites: [{
      name: 'Peter',
      salary: 2000
    }, {
      name: 'Alex',
      salary: 1800
    }],

    internals: [{
      name: 'Jack',
      salary: 1300
    }]
  }
};

// hard to traverse iteratively (loops) now and if it changes in the future
// especially if nested subdepartments -- So Use Recursion!
// simple case: 1 department with an array of employees
// not-so-simple case: object with N subdepartments

function sumSalaries(dept) {
  // check for the simple case - dept is an array
  if (Array.isArray(dept)) {
    // use reduce to sum salaries in the array
    let sum = dept.reduce((prev, curr) => prev + curr.salary, 0);
    // return sum of simple case
    return sum;
  }else{
    // then we have the not-so-simple case
    let sum = 0;
    // loop over the values of the objects
    // Object.values() returns an array of object values - natch
    for (let subdep of Object.values(dept)) {
      // the recursion!!
      sum += sumSalaries(subdep);
    }
    // return the sum of the not-simple-case
    return sum;
  }
}

let sum = sumSalaries(company);
bucket.insertAdjacentHTML('beforeend', `<h3>Total Department Salaries</h3><p>$${sum}</p>`);
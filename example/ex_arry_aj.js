
let arr1 = [];
console.log(typeof arr1);
arr1 = [5, 2, 10, 'student']; //untyped & unsized
console.log(arr1.length); // 3
console.log(arr1[0]); //5
console.log(arr1[arr1.length - 1]); //student
console.log(arr1[arr1[1]] ); // arr1[2] = 10
let arr2 = [
    { id: 1, name: 'Adam' },
    { id: 2, name: 'Joe' }
  ];
  
  console.log(arr2[1].name);

  
  let arr3 = [
    // [(0,0) 1, (0,1) 3, (0,2) 5, (0,3) 7],
    // [(1,0)2, (1,1) 4, (1,2)6,  (1,3) 8]
  
    [1, 3, 5, 7],
    [2, 4, 6, 8]
  ];
  
  console.log(arr3[1][1]);

  
  //spred เอามาวางแทน
  let arr4 = [...arr3, 0.5, 100, ...arr2];
  console.log(arr4);

  let letters = [...'Hello world'];

let value = '';
// console.log(letters.entries());


// lterating array
for (let [index, letter] of letters.entries()) {

  console.log(`index: ${index}`);

  console.log(`letter: ${letter}`);

  // if (index % 2 === 0) value += letter; // letters at even indexes

}
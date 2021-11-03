//global scope : greeting, someone, say
// local scope: sentence

let greeting = 'hello';

let someone = 'Umaporn';



function say(sentence) {

  //sentence is local variable, using within say() function only

  console.log(`${greeting}, ${someone}`);

  console.log(`${sentence}`);

}

say('Today is Tuesday');

// console.log(`sentence: ${sentence}`); //cannot refer sentence variable

console.log(`greeting: ${greeting}`);

console.log(`someone: ${someone}`);

say('Yesterday is Monday');
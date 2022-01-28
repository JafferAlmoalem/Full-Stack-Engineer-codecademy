let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
//remove the last elements
secretMessage.pop();
//check the work 
console.log(secretMessage.length);
secretMessage.push('Program');
secretMessage[7]= 'right';
secretMessage.shift();
secretMessage.unshift('Programming')
secretMessage.splice(6,11,'know');
// Print the result as sentance
console.log(secretMessage.join());

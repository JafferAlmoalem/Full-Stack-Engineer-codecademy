let input = 'turpentine and turtles';
let vowels = ['a','e','i','o','u'];
let resultArray = [];
for(let i =0; i<input.length; i++){
 for(let k =0; k<vowels.length; k++){
   if(input[i]==vowels[k]){
     resultArray.push(vowels[k]);
   }
 }
 if(input[i]=='e' || input[i]=='u'){
   resultArray.push(input[i]);
 }
}
console.log(resultArray.join('').toUpperCase());
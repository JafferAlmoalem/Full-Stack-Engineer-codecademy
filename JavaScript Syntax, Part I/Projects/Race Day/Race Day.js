let raceNumber = Math.floor(Math.random() * 1000);

let EarlyReg = true;
let Age = 18;
if(Age > 18 && EarlyReg===true){
raceNumber +=1000;
console.log(`Dear ${raceNumber}, The race will start at 9:30 am. `);
} else if(Age > 18 && EarlyReg===false){
console.log(`Dear ${raceNumber}, The race will start at 11:00 am. `);
} else if(Age < 18 ){
console.log(`Dear ${raceNumber}, The race will start at 12:30 pm. `);
}else{
  console.log('See the registration desk');
}



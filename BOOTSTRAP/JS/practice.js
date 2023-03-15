// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!
// let num = []
// // WRITE YOUR LOOP BELOW THIS LINE:
// for(let i=0; i < people.length; i++)
// {   
//     num[i] = people[i].toUpperCase();
// }    

// for(let i=0;i<num.length;i++)
//       {
//      if(num[i] == 'VELMA')
//      {
//        num[i]=num[i].replace('VELMA','TOKYA');
//      }
// }

// console.log(num);

// const fruits = "Ballons are red in colour"

// let i = 0;
// while (i <fruits.length)
// { 
//     if(fruits.slice(i).indexOf('l')!=-1){
//         a=i+fruits.slice(i).indexOf('l');
//         console.log(a);
//         i=a+1;
//     }else{
//         break;
//     }
// }

let maximum = parseInt(prompt("Hey! enter the maximum number"));
while(!maximum){
    maximum = parseInt(prompt("Enter a valid number"))
}
const targetnum = Math.floor(Math.random()*maximum)+1;
console.log(targetnum);

let guess = parseInt(prompt("guess a number"));
let attempts =1;
while(parseInt(guess) !== targetnum){
    if(guess === 'q') break;
    attempts++;
    if(parseInt(guess) > targetnum){
        guess = prompt("Too high");
    }
    else{
        guess = prompt("Too low");
    }
}
if(guess==='q'){
    console.log("quit")
}else{
console.log("Congrats!")
}


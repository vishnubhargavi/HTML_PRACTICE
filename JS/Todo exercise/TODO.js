let input = prompt("what would you like to get");
const todo = ['chicken is a non veg', 'egg is either NV or veg']
while(input!=='quit' && input !== 'q')
{
    if(input=== 'list')
    {
        console.log("**********");
        for(let i=0;i<todo.length;i++){
            console.log(`${i}, ${todo[i]}`);
        }
        console.log("*************");
    }else if (input === 'new')
    {
      let textnew = prompt("OK! you can enter a new todo");
      todo.push(textnew);
      console.log(`${textnew}`, 'is added to the todo list');
    }else if (input === 'delete')
    {
        let indexdelete = prompt("OK! enter your index to delete");
        if(!Number.isNaN(indexdelete) && indexdelete < todo.length)
        {
            const deleted = todo.splice(indexdelete,1)
            console.log(`OK! deleted index ${indexdelete}`);
        }else{
        console.log("Enter a correct index")
        }
}
    input = prompt("what would you like to get")
}

console.log("OK! YOU QUIT");
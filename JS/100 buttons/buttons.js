const div = document.querySelector('div');

for(let i=0;i<100;i++){
    const newbutton = document.createElement('button');
    newbutton.innerHTML = 'Hey !';
    div.appendChild(newbutton);
}
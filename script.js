const msgBox = document.getElementById('msgBox');
const sendBtn = document.getElementById('sendBtn');
const form = document.getElementById('form');

sendBtn.addEventListener('click', ()=>{
    if(!msgBox.value){
        alert('Message cannot be Empty!');
    }
    else{
        console.log(msgBox.value);
    }

});

form.addEventListener('submit', (e)=>{
    e.preventDefault();
});
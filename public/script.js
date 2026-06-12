const msgBox = document.getElementById('msgBox');
const sendBtn = document.getElementById('sendBtn');
const form = document.getElementById('form');



form.addEventListener('submit', async (e)=>{
    e.preventDefault();

    if (!msgBox.value.trim()){
        return alert('Message cannot be Empty!');

    }

    try{
        const response = await fetch('/api/secrets', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({message: msgBox.value.trim()})
        });

        const data = await response.json();
        console.log(`Server responded with ${data}`);

    }
    catch(error){
        console.log(error)
    }
});
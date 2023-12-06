// JS MAIL

/* 
1) Creare input per mettere myEmail
2) Creare lista (array) con elenco delle emailValid
3) SE myEmail è contenuto in emailValid
--- stampa 'puoi entrare'
4)ALTRIMENTi 'non puoi entrare'

*/

const sendButton = document.getElementById('sendButton');

const emailValid = ['forza@inter.com' , 'forza@milan.com' , 'forza@napoli.com', 'forza@lazio.com'];
console.log(emailValid);

sendButton.addEventListener ('click', function() {
    const myEmail = document.querySelector('input').value;
    console.log('myEmail ', myEmail, typeof myEmail);

    const correct = emailValid.includes(myEmail);

    if (correct){
        console.log('PUOI ENTRARE')
    }
    
    else {
        console.log('NON PUOI ENTRARE')
    }
})

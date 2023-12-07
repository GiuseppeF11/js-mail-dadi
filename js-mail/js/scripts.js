// JS MAIL

/* 
1) Creare input per mettere myEmail
2) Creare lista (array) con elenco delle emailValid
3) SE myEmail è contenuto in emailValid
--- stampa 'puoi entrare'
4)ALTRIMENTi
--- stampa 'puoi entrare'
*/

const sendButton = document.getElementById('sendButton');

const emailValid = [
    'forza@inter.com' ,
    'forza@milan.com' ,
    'forza@napoli.com',
    'forza@lazio.com'
];
console.log(emailValid);

sendButton.addEventListener ('click', function() {
    const myEmail = document.querySelector('input').value;
    console.log('myEmail ', myEmail, typeof myEmail);

    let result = document.querySelector('h1');

    if (emailValid.includes(myEmail)){
        result.innerHTML = 'PUOI ENTRARE';
        console.log('PUOI ENTRARE');
    }

    else {
        result.innerHTML = 'NON PUOI ENTRARE';
        console.log('NON PUOI ENTRARE');
    }
})


// ALTERNATIVA COL FOR 


/* for (let i = 0; i < emailValid.length; i++) {
    console.log(i, emailValid[i]);

    if (emailValid[i] == userEmail) {
        alert('ENTRI')
    }

    else {
        alert('NON PENSO PROPRIO')
    }
} */
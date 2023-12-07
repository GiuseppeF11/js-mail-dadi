// JS DADI

/* 
1) Creare myButton per avviare la scelta casuale del myNum
2) Creare cpuButton per avviare la scelta casuale del cpuNum
3) SE myNum > cpuNum
--- stampa 'hai vinto'
4)INVECE SE myNum = cpuNum
--- stampa 'pareggio'
5)ALTRIMENTI
--- stampa 'hai perso'
*/

const myButton = document.getElementById('myButton');
const cpuButton = document.getElementById('cpuButton');
const playButton = document.getElementById('playButton');

myButton.addEventListener ('click', function() {
    const myNum = document.getElementById('myNum');
    const myNumValue = myNum.innerHTML = Math.floor(Math.random() * 6) + 1;
    

    cpuButton.addEventListener ('click', function() {
        const cpuNum = document.getElementById('cpuNum');
        const cpuNumValue = cpuNum.innerHTML = Math.floor(Math.random() * 6) + 1;

        playButton.addEventListener('click', function() {

            let result = document.querySelector('h1');

            if (myNumValue > cpuNumValue) {
                result.innerHTML = 'HAI VINTO!';
            }
            
            else if (myNumValue < cpuNumValue){
                result.innerHTML = 'HAI PERSO...';
            }

            else {
                result.innerHTML = 'PAREGGIO';
            }
            
        })
    })
})




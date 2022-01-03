function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

//kamuoliuku pagaminimas
const makeBall = (text = '') => {
    let div = document.createElement('div');
    // div.style.display = 'none'
    div.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
    let divText = document.createTextNode(text);
    div.classList.add('ball');
    document.querySelector('.square1').appendChild(div)
    div.appendChild(divText);
};


//laikmatis
let sec = 0;
const countTimer = mode => {
    const timerEl = document.querySelector('.timer_clock');
    switch (mode) {
        case 'reset':
            timerEl.innerText = '00';
            sec = 0;
            clearInterval(parseInt(timerEl.dataset.id));
            break;
        case 'start':
            timerEl.dataset.id = setInterval(() => {
                sec++
                timerEl.innerText = sec;
            }, 1000);
            break;
    }
}

const startButton = document.querySelector('.start');


startButton.addEventListener('click', () => {
    countTimer('start');
    document.querySelector('.start').disabled = true;
    let firstBall = document.querySelector('.square1 div');
    if (firstBall == null) {
        for (let i = 0; i < 25; i++) {
            makeBall(i + 1);
        };
    } else {}

    const ball = document.querySelectorAll('.ball');
    const square2 = document.querySelector('.square2');
    let invisibleBall = document.querySelectorAll('.square2 div');

    ball.forEach((b) => {
        b.addEventListener('click', (e) => {
            invisibleBall = document.querySelectorAll('.square2 div');
            if (b.textContent == invisibleBall.length + 1) {
                square2.appendChild(b);
                document.querySelector('.pop_up').style.display = 'none';
                // let emptyBall = document.createElement('div');
                // emptyBall.classList.add('ball');
                // document.querySelector('.square1').appendChild(emptyBall);
                e.stopImmediatePropagation();
            } else {
                console.log(square2);
                document.querySelector('.pop_up').style.display = 'block';
            }
        })
    });
})

const resetButton = document.querySelector('.reset');

resetButton.addEventListener('click', () => {
    countTimer('reset');
    document.querySelector('.start').disabled = false;

    const ball = document.querySelectorAll('.ball');
    ball.forEach((b) => {
        b.remove()
    })
})
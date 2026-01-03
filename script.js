function birthdayCountDay() {
    const birthday = (new Date('February 13 2026 00:00'));
    const nowDay = new Date();
    const diff = birthday - nowDay;
    const msInDay = 24 * 60 * 60 *1000;
    const msInHour = 60 * 60 * 1000;
    const msInMinute = 60 * 1000;
    const msInSecond = 1000;

    const displayDays = Math.floor(diff/msInDay);
    document.querySelector('.days').textContent = displayDays;

    const displayHours = Math.floor((diff%msInDay) / msInHour);
    document.querySelector('.hours').textContent = displayHours;

    const displayMinute = Math.floor((diff%msInHour) / msInMinute);
    document.querySelector('.minute').textContent = displayMinute;

    const displaySecond = Math.floor((diff%msInMinute) / msInSecond);
    document.querySelector('.second').textContent = displaySecond;

    if (diff <= 0) {
        document.querySelector('.days').textContent = 0;
        document.querySelector('.hours').textContent = 0;
        document.querySelector('.minute').textContent = 0;
        document.querySelector('.second').textContent = 0;

        clearInterval(timerId);
        newTittle();
        blockedTimer();
    }
}

let timerId = setInterval(birthdayCountDay, 1000);

function newTittle () {

    const newHeading = document.querySelector('h1');

    newHeading.textContent = 'Your day has come, celebrate!';
    document.body.classList.add('ready');
    newHeading.classList.add('newStyleTitle');
}

function blockedTimer () {

    const blocked = document.querySelector('.timer');
    blocked.style.display = 'none';
}
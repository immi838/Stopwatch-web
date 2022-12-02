// Global variables

const time_el = document.querySelector('.watch .time');
const start_button = document.getElementById('start');
const stop_button = document.getElementById('stop');
const reset_button = document.getElementById('reset');
const dark_mode = document.querySelector('.input');
const watch_box = document.querySelector('.watch')

let seconds = 0 ;
let interval = null;
let dark_vs_light = 0
// events listeners
start_button.addEventListener('click' , start);
stop_button.addEventListener('click', stop)
reset_button.addEventListener('click', reset)
dark_mode.addEventListener('click', mode_change)

//update the timer

function timer () {
    seconds++;

    // format our time
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds-(hrs*3600))/ 60);
    let secs = seconds % 60;   

    if (secs < 10) secs = '0' + secs;
    if (mins < 10) mins = '0' + mins;
    if (hrs < 10) hrs = '0' + hrs;

    time_el.innerText = ` ${hrs}:${mins}:${secs}`;
}

function start () {
    if (interval) {
        return
    }


    interval = setInterval(timer, 1000);
}

function stop () {
    clearInterval(interval);
    interval = null;
}

function reset () {
    stop();
    seconds = 0;
    time_el.innerText = '00:00:00' ;

}

function mode_change () {
    if (dark_vs_light % 2 == 0) {
        document.body.style.backgroundColor = '#F3F4F6';

    }
    else document.body.style.backgroundColor = '#313B3B'; //change to dark
    dark_vs_light++;
    
}
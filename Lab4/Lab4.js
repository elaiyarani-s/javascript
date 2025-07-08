
function sleepIn(weekday,vacation){
    return !weekday || vacation;
}

function checkSleepIn() {
    const isWeekday = document.getElementById('weekday').checked;
    const isVacation = document.getElementById('vacation').checked;
    const result = sleepIn(isWeekday, isVacation);
    
    document.getElementById('result').innerText = result ? "Yes, you can sleep in!" : "No, you have to wake up.";
}

function monkeyTrouble(aSmile, bSmile) {
    return aSmile === bSmile;
}

function checkMonkeyTrouble() {
    const isaMonkey = document.getElementById('aMonkey').checked;
    const isbMonkey = document.getElementById('bMonkey').checked;
    const res = monkeyTrouble(isaMonkey, isbMonkey);
    
    document.getElementById('res').innerText = res ? "Noooo, We are in trouble!" : "ooof, We are not in trouble.";
}

function stringTimes(str,n) {
    return str.repeat(n);
}

function showRepeatedString() {
    const str = document.getElementById('inputString').value;
    const n = parseInt(document.getElementById('inputNumber').value);
    const result = stringTimes(str, n);
    document.getElementById('strres').innerText = result;
}

function luckySum(a, b, c){
    if (!(a == 13 || b == 13 || c == 13)) return a+b+c;
    else if (a== 13) return 0;
    else if (b === 13) return a;
    else if (c === 13) return a + b;
}

function showLuckySum() {
    const a = parseInt(document.getElementById('num1').value);
    const b = parseInt(document.getElementById('num2').value);
    const c = parseInt(document.getElementById('num3').value);

    const result = luckySum(a, b, c);
    document.getElementById('numres').innerText = `The lucky sum is: ${result}`;
  }

function caught_speeding(speed, is_birthday){
    if (is_birthday) {
        speed -= 5; 
      }
    if (speed <=60) {
        return 0;
    }
    else if (speed >= 61 && speed <= 80 ) {
        return 1;
    } else {
        return 2;
    }
}

function checkSpeed() {
    const speed = parseInt(document.getElementById('speed').value);
    const isBirthday = document.getElementById('birthday').checked;
    const ticket = caught_speeding(speed, isBirthday);
    let resultMessage;
    switch (ticket) {
      case 0:
        resultMessage = "No ticket.";
        break;
      case 1:
        resultMessage = "Small ticket.";
        break;
      case 2:
        resultMessage = "Big ticket.";
        break;
      default:
        resultMessage = "Error.";
    }
    document.getElementById('tktres').innerText = `Result: ${resultMessage}`;
}
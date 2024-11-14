let dayP=document.getElementById("day")
let dayH=document.getElementById("hour")
let dayM=document.getElementById("minute")
let dayS=document.getElementById("second")

let Dday=document.getElementsByClassName("day")
let Hday=document.getElementsByClassName("hour")
let Mday=document.getElementsByClassName("minute")
let Sday=document.getElementsByClassName("dseconday")

let dayPP=prompt("შეიყვანე დღეების რაოდენობა")
let dayHP=prompt("შეიყვანე საათის რაოდენობა")
let dayMP=prompt("შეიყვანე წუთების რაოდენობა")
let daySP=prompt("შეიყვანე წამების რაოდენობა")

dayP.textContent=dayPP
dayH.textContent=dayHP
dayM.textContent=dayMP
dayS.textContent=daySP


let second=daySP
let minute=dayMP
let hour=dayHP
let day=dayPP

let countdown = setInterval(() => {
    if (day == 0 && hour == 0 && minute == 0 && second == 0) {
        clearInterval(countdown);
        alert("მორჩა ტაიმერი!!!!!!!!");
    } else {

        if (second > 0) {
            second--;
            
        } else {
            second = 59;
            if (minute > 0) {
                minute--;
            } else {
                minute = 59;
                if (hour > 0) {
                    hour--;
                } else {
                    hour = 23;
                    if (day > 0) {
                        day--;
                    }
                }
            }
        }
    }


    dayP.textContent = day;
    dayH.textContent = hour;
    dayM.textContent = minute;
    dayS.textContent = second;
}, 1000);
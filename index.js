let alarmTime = null;
let alarmTimeout = null;

function setAlarm() {
    const timeInput = document.getElementById("alarmTime").value;
    if (!timeInput) return;

    const now = new Date();
    const alarm = new Date();

    const [hours, minutes] = timeInput.split(":");
    alarm.setHours(hours);
    alarm.setMinutes(minutes);
    alarm.setSeconds(0);

    if (alarm < now) {
        alarm.setDate(alarm.getDate() + 1); // next day
    }

    const timeToAlarm = alarm - now;

    alarmTimeout = setTimeout(triggerAlarm, timeToAlarm);
    document.getElementById("status").innerText = "Alarm set for " + timeInput;
}

function triggerAlarm() {
    document.getElementById("alarmSound").play();
    alert("⏰ Wake up!");
}
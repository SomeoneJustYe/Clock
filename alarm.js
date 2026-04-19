let let alarms = [];

function updateClock(){
    const now = new Date();
    const time = now.toLocaleTimeString();
    document.getElementById("clock").innerText = time;

    checkAlarms(now);
}
setInterval(updateClock,1000);

function addAlarm(){
    const input = document.getElementById("alarmTime").value;
    if(!input) return;

    alarms.push(input);
    renderAlarms();
}

function renderAlarms(){
    const list = document.getElementById("alarmList");
    list.innerHTML = "";

    alarms.forEach((time,index)=>{
        const li = document.createElement("li");
        li.innerHTML = `
            ${time}
            <button class="deleteBtn" onclick="deleteAlarm(${index})">X</button>
        `;
        list.appendChild(li);
    });
}

function deleteAlarm(index){
    alarms.splice(index,1);
    renderAlarms();
}

function checkAlarms(now){
    const current = now.toTimeString().slice(0,5);
    if(alarms.includes(current)){
        document.getElementById("alarmSound").play();
        alert("⏰ Alarm ringing!");
    }
}

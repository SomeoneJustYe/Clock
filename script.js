// ─── Real-Time Clock ──────────────────────────────────

const timeEl     = document.getElementById('time');
const ampmEl     = document.getElementById('ampm');
const dateLineEl = document.getElementById('date-line');
const timezoneEl = document.getElementById('timezone');

const DAYS   = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];
const MONTHS = ['JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE',
                'JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER'];

function pad(n) {
  return String(n).padStart(2, '0');
}

function getTimezoneLabel() {
  // Get local timezone name and UTC offset
  const offset = -new Date().getTimezoneOffset(); // in minutes
  const sign   = offset >= 0 ? '+' : '-';
  const hrs    = Math.floor(Math.abs(offset) / 60);
  const mins   = Math.abs(offset) % 60;
  const utcStr = `UTC${sign}${hrs}${mins ? ':' + pad(mins) : ''}`;

  // Try to get a friendly timezone city name
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    // e.g. "Asia/Kuala_Lumpur" → "Kuala Lumpur"
    const city = tz.split('/').pop().replace(/_/g, ' ');
    return `${utcStr} · ${city}`;
  } catch {
    return utcStr;
  }
}

function updateClock() {
  const now  = new Date();

  // Time
  let   hours   = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm    = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12 || 12; // convert to 12-hour

  timeEl.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  ampmEl.textContent = ampm;

  // Date
  const day   = DAYS[now.getDay()];
  const date  = now.getDate();
  const month = MONTHS[now.getMonth()];
  const year  = now.getFullYear();
  dateLineEl.textContent = `${day} · ${date} ${month} ${year}`;
}

// Set timezone once (static)
timezoneEl.textContent = getTimezoneLabel();

// Tick every second
updateClock();
setInterval(updateClock, 1000);
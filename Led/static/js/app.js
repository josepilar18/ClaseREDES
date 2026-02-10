body {
  font-family: Arial, sans-serif;
  padding: 16px;
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.row {
  display: flex;
  gap: 12px;
  margin: 12px 0;
const log = document.getElementById("log");
const btnOn = document.getElementById("btnOn");
const btnOff = document.getElementById("btnOff");

function writeLog(msg) {
  log.textContent = msg + "\n" + log.textContent;
}

async function setLed(state) {
  const r = await fetch("/set_led", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ state })
  });

  const j = await r.json();
  if (j.ok) writeLog(`${j.cmd} -> ${j.resp}`);
  else writeLog(`ERROR -> ${j.error || j.resp}`);
}

btnOn.addEventListener("click", () => setLed(1));
btnOff.addEventListener("click", () => setLed(0));}

button {
  padding: 10px 14px;
  font-size: 16px;
  cursor: pointer;
}

pre {
  background: #111;
  color: #ddd;
  padding: 10px;
  min-height: 140px;
  white-space: pre-wrap;
}

.error {
  color: #b00020;
}

.logout {
  text-decoration: none;
}

input {
  display: block;
  margin: 6px 0 12px;
  padding: 8px;
  width: 240px;
}

label {
  display: block;
  margin-top: 6px;
}

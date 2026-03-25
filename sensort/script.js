let port;
let reader;
let buffer = "";

async function connectSerial() {
    port = await navigator.serial.requestPort();
    await port.open({ baudRate: 9600 });

    reader = port.readable.getReader();

    while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        buffer += new TextDecoder().decode(value);

        let lines = buffer.split("\n");
        buffer = lines.pop();

        for (let line of lines) {
            parseData(line);
        }
    }
}

function parseData(data) {

    let temp = data.match(/Temp: ([\d.]+)/);
    let rango = data.match(/Rango: (\w+)/);
    let pwm = data.match(/PWM: (\d+)/);
    let rpm = data.match(/RPM: (\d+)/);

    if(temp) document.getElementById("temp").innerText = temp[1] + " °C";
    if(rango) document.getElementById("rango").innerText = rango[1];
    if(pwm) document.getElementById("pwm").innerText = pwm[1];
    if(rpm) document.getElementById("rpm").innerText = rpm[1];

    let motor = document.querySelector(".motor");

    if(pwm){
        let speed = parseInt(pwm[1]);

        let duration = 2 - (speed / 255);

        if(duration < 0.2) duration = 0.2;

        motor.style.animationDuration = duration + "s";
    }
}

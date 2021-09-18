var awsIot = require('aws-iot-device-sdk');

var device = awsIot.device({
    keyPath: './certs/private.pem.key',
    certPath: './certs/certificate.pem.crt',
    caPath: './certs/caCert.crt',
    clientId: 'ASTROMX-SERVER',
    host: 'a1yb6uz88ad0ry-ats.iot.us-east-1.amazonaws.com'
});

device.on('connect', () => {
    console.log("Device connected...");
    device.subscribe('ASTROMX/Command');
});

device.on('message', (topic, payload) => {
    console.log("MESSAGE: ", topic, payload.toString());
});

setInterval(() => {
    device.publish("ASTROMX/Status", JSON.stringify({ status: 2 }));
}, 1000);
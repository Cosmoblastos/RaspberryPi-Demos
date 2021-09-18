var awsIot = require('aws-iot-device-sdk');

var device = awsIot.device({
    keyPath: './certs2/private.pem.key',
    certPath: './certs2/certificate.pem.crt',
    caPath: './certs2/caCert.crt',
    clientId: 'ASTROMX-RASPBERRYPI',
    host: 'a1yb6uz88ad0ry-ats.iot.us-east-1.amazonaws.com'
});

device.on('connect', () => {
    console.log("Device connected...");
    device.subscribe('ASTROMX/Status');
});

device.on('message', (topic, payload) => {
    console.log("MESSAGE: ", topic, payload.toString());
});

setInterval(() => {
    device.publish('ASTROMX/Command', JSON.stringify({ status: 1 }));
}, 1000);
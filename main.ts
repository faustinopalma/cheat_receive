radio.onReceivedNumber(function (receivedNumber) {
    radio.sendString("R")
    basic.showNumber(receivedNumber + 1)
    for (let index = 0; index < receivedNumber + 1; index++) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(vib_duration)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(pause_vibration)
    }
    radio.sendString("F")
})
let pause_vibration = 0
let vib_duration = 0
let message_number = 0
basic.showNumber(message_number + 1)
radio.setGroup(143)
vib_duration = 700
pause_vibration = 400

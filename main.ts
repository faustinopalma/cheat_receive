radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber + 1)
    for (let index = 0; index < receivedNumber + 1; index++) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(vib_duration)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(pause_vibration)
    }
    basic.pause(3000)
    for (let index = 0; index < receivedNumber + 1; index++) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(vib_duration)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(pause_vibration)
    }
    radio.sendString("R")
})
input.onButtonPressed(Button.A, function () {
    message_number = (message_number + 1) % _module
    basic.showNumber(message_number + 1)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    basic.pause(3000)
    basic.showNumber(message_number + 1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(message_number)
})
let pause_vibration = 0
let vib_duration = 0
let _module = 0
let message_number = 0
message_number = 0
basic.showNumber(message_number + 1)
_module = 5
radio.setGroup(143)
vib_duration = 700
pause_vibration = 400

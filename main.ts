let tijd5 = 0
let tijd4 = 0
let tijd3 = 0
let tijd2 = 0
let tijd1 = 0
let tijd0 = 0
serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate115200
)
let fase = 0
let laag = 255
let hoog = 512
serial.writeLine("ready")
if (true) {
    if (fase == 0 && pins.analogReadPin(AnalogPin.P0) > hoog) {
        tijd0 = input.runningTimeMicros()
        fase = 1
        led.plot(0, 0)
    }
    if (fase == 1 && pins.analogReadPin(AnalogPin.P0) < laag) {
        tijd1 = input.runningTimeMicros()
        fase = 2
        led.plot(1, 0)
    }
    if (fase == 2 && pins.analogReadPin(AnalogPin.P1) > hoog) {
        tijd2 = input.runningTimeMicros()
        fase = 3
        led.plot(2, 0)
    }
    if (fase == 3 && pins.analogReadPin(AnalogPin.P1) < laag) {
        tijd3 = input.runningTimeMicros()
        fase = 4
        led.plot(3, 0)
    }
    if (fase == 4 && pins.analogReadPin(AnalogPin.P2) > hoog) {
        tijd4 = input.runningTimeMicros()
        fase = 5
        led.plot(4, 0)
    }
    if (fase == 5 && pins.analogReadPin(AnalogPin.P2) < laag) {
        tijd5 = input.runningTimeMicros()
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        serial.writeNumber(tijd0)
        serial.writeLine(" ")
        serial.writeNumber(tijd1)
        serial.writeLine(" ")
        serial.writeNumber(tijd2)
        serial.writeLine(" ")
        serial.writeNumber(tijd3)
        serial.writeLine(" ")
        serial.writeNumber(tijd4)
        serial.writeLine(" ")
        serial.writeNumber(tijd5)
        serial.writeLine(" ")
        fase = 0
    }
}

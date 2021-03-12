input.onButtonPressed(Button.A, function () {
    serial.writeLine("Button A Pressed!")
})
// screen /dev/ttyACM0
basic.showLeds(`
    # # # # #
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    `)
serial.redirectToUSB()
basic.forever(function () {
    serial.writeLine("Hello World")
    basic.pause(500)
})

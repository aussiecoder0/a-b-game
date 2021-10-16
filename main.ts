let r = 0
basic.showLeds(`
    # . . . .
    . # . . .
    . . # . .
    . . . # .
    . . . . #
    `)
basic.showLeds(`
    . . . . #
    . . . # .
    . . # . .
    . # . . .
    # . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    # # # # #
    . . . . .
    . . . . .
    `)
basic.clearScreen()
let good = 0
for (let index = 0; index < 4; index++) {
    r = randint(0, 10)
    if (r % 2 == 0) {
        basic.showString("A")
        basic.pause(1000)
        if (input.buttonIsPressed(Button.A)) {
            basic.showIcon(IconNames.Yes)
            good += 1
        } else {
            basic.showIcon(IconNames.No)
        }
    } else {
        basic.showString("B")
        basic.pause(1000)
        if (input.buttonIsPressed(Button.B)) {
            basic.showIcon(IconNames.Yes)
            good += 1
        } else {
            basic.showIcon(IconNames.No)
        }
    }
}
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.showNumber(good)
basic.pause(2000)
basic.forever(function () {
	
})

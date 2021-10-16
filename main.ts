input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    arrow = 1
    basic.showLeds(`
        . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
    `)
})
input.onGesture(Gesture.LogoUp, function on_gesture_logo_up() {
    if (arrow == 1) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    arrow = 2
    basic.showLeds(`
        . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
    `)
})
input.onGesture(Gesture.LogoDown, function on_gesture_logo_down() {
    if (arrow == 2) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
    
})
let arrow = 0
arrow = 0
music.setBuiltInSpeakerEnabled(true)
soundExpression.happy.play()

def on_button_pressed_a():
    global arrow
    arrow = 1
    basic.show_leds("""
        . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
    """)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_logo_up():
    if arrow == 1:
        basic.show_icon(IconNames.YES)
    else:
        basic.show_icon(IconNames.NO)
input.on_gesture(Gesture.LOGO_UP, on_gesture_logo_up)

def on_button_pressed_b():
    global arrow
    arrow = 2
    basic.show_leds("""
        . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
    """)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_logo_down():
    if arrow == 2:
        basic.show_icon(IconNames.YES)
    else:
        basic.show_icon(IconNames.NO)
input.on_gesture(Gesture.LOGO_DOWN, on_gesture_logo_down)

arrow = 0
arrow = 0
music.set_built_in_speaker_enabled(True)
soundExpression.happy.play()
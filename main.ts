/**
 * Simple code that lights the matrix in a spiral for a few seconds before clearing the display and then relying on the "A" and "B" buttons to decrease and increase the brightness of the central LED.
 * 
 * When the LED is fully extinguished (the default state) the left-hand LED of the central row is illuminated. When the central LED is at its brightest the right-hand LED of the central row is illuminated.
 * 
 * At any time the user can see the current level value by touching the MicroBit logo.
 */
// If "level" variable is not at its minimum value then decrement it (limiting it to the minimum) and call "light(level)" setting the central LED
input.onButtonPressed(Button.A, function () {
    if (level > levelmin) {
        level += 0 - levelstep
        if (level < levelmin) {
            level = levelmin
        }
        light2(level)
    }
})
// Sets all the LEDs in the matrix in a clockwise spiral (starting top-left) with each LED increasing in brightness by steps of 10 from 10 to 250
function sequence () {
    led.plotBrightness(0, 0, 10)
    led.plotBrightness(1, 0, 20)
    led.plotBrightness(2, 0, 30)
    led.plotBrightness(3, 0, 40)
    led.plotBrightness(4, 0, 50)
    led.plotBrightness(4, 1, 60)
    led.plotBrightness(4, 2, 70)
    led.plotBrightness(4, 3, 80)
    led.plotBrightness(4, 4, 90)
    led.plotBrightness(3, 4, 100)
    led.plotBrightness(2, 4, 110)
    led.plotBrightness(1, 4, 120)
    led.plotBrightness(0, 4, 130)
    led.plotBrightness(0, 3, 140)
    led.plotBrightness(0, 2, 150)
    led.plotBrightness(0, 1, 160)
    led.plotBrightness(1, 1, 170)
    led.plotBrightness(2, 1, 180)
    led.plotBrightness(3, 1, 190)
    led.plotBrightness(3, 2, 200)
    led.plotBrightness(3, 3, 210)
    led.plotBrightness(2, 3, 220)
    led.plotBrightness(1, 3, 230)
    led.plotBrightness(1, 2, 240)
    led.plotBrightness(2, 2, 250)
}
// If "level" variable is not at its maximum value then increase it (limiting it to the maximum) and call "light(level)" setting the central LED
input.onButtonPressed(Button.B, function () {
    if (level < levelmax) {
        level += levelstep
        if (level > levelmax) {
            level = levelmax
        }
        light2(level)
    }
})
// A function, provided with a "level" value -  expected to be the light level of an LED, that sets the brightness of the central LED to that level and then also illuminates the left-hand LED of the central row if the level is at or below the minimum or the right-hand LED if at or above the maximum.
function light2 (num: number) {
    led.plotBrightness(2, 2, num)
    if (num >= levelmax) {
        led.plot(4, 2)
    } else {
        led.unplot(4, 2)
    }
    if (num <= levelmin) {
        led.plot(0, 2)
    } else {
        led.unplot(0, 2)
    }
}
// If initialised this displays the current level in the LED matrix before returning the matrix to its normal state.
input.onLogoEvent(TouchButtonEvent.Released, function () {
    if (initialised) {
        basic.clearScreen()
        basic.showNumber(level)
        basic.pause(1000)
        light2(level)
    }
})
// Initialises the app by setting the initial LED level, its upper and lower limits and a "step" (increment) rate.
// 
// It then calls "sequence()" before waiting a few seconds, clearing the screen and initialising the app main display.
let level = 0
let levelstep = 0
let levelmax = 0
let levelmin = 0
let initialised = 0
initialised = 0
levelmin = 0
levelmax = 255
levelstep = 8
level = levelstep * 4
sequence()
basic.pause(5000)
basic.clearScreen()
light2(level)
initialised = 1

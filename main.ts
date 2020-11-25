input.onButtonPressed(Button.A, function () {
    if (level > levelmin) {
        level += 0 - levelstep
        if (level < levelmin) {
            level = levelmin
        }
        light2(level)
    }
})
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
input.onButtonPressed(Button.B, function () {
    if (level < levelmax) {
        level += levelstep
        if (level > levelmax) {
            level = levelmax
        }
        light2(level)
    }
})
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
let levelstep = 0
let levelmax = 0
let levelmin = 0
let level = 0
level = 0
levelmin = 0
levelmax = 255
levelstep = 8
sequence()
basic.pause(2000)
basic.clearScreen()
light2(level)

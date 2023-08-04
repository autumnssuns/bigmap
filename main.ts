function getPoint (px: number, py: number) {
    if (py < 0 || py > height) {
        return "#"
    }
    if (px < 0 || px > width) {
        return "#"
    }
    return map[py][px]
}
function renderView () {
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= 4; j++) {
            if (getPoint(x - 2 + i, y - 2 + j) == "#") {
                led.plotBrightness(i, j, 25)
            }
        }
    }
    led.plotBrightness(2, 2, 255)
}
function move () {
    xDiff = Math.round(input.rotation(Rotation.Roll) / 45)
    yDiff = Math.round(input.rotation(Rotation.Pitch) / 45)
    if (input.rotation(Rotation.Roll) != 0) {
        if (getPoint(x + xDiff, y) != "#") {
            x = x + xDiff
        }
    }
    if (input.rotation(Rotation.Pitch) != 0) {
        if (getPoint(x, y + yDiff) != "#") {
            y = y + yDiff
        }
    }
}
let yDiff = 0
let xDiff = 0
let y = 0
let x = 0
let map: string[] = []
let height = 0
let width = 0
led.setDisplayMode(DisplayMode.Greyscale)
width = 10
height = 10
map = [
"..........",
"..#....#..",
"...####...",
".....#....",
"...#......",
"......##..",
"......#...",
"...#......",
"...####...",
"..........",
".........."
]
x = 0
y = 1
basic.forever(function () {
    basic.clearScreen()
    move()
    renderView()
    basic.pause(100)
})

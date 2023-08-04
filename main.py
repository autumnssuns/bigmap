def getPoint(x: number, y: number):
    if y < 0:
        return "#"
    if x < 0:
        return "#"
    return map2[y][x]
def renderView():
    for i in range(5):
        for j in range(5):
            if getPoint(x2 - 2 + i, y2 - 2 + j) == "#":
                led.plot_brightness(i, j, 255)
    led.plot_brightness(2, 2, 255)
def move():
    global xDiff, yDiff, x2, y2
    xDiff = Math.idiv(input.rotation(Rotation.ROLL), 90)
    yDiff = Math.idiv(input.rotation(Rotation.PITCH), 90)
    if input.rotation(Rotation.ROLL) > 0 or x2 > 0 and input.rotation(Rotation.ROLL) < 0:
        if getPoint(x2 + xDiff, y2) == "#":
            return
        x2 = x2 + xDiff
    if input.rotation(Rotation.PITCH) > 0 or y2 > 0 and input.rotation(Rotation.PITCH) < 0:
        if getPoint(x2, y2 + yDiff) == "#":
            return
        y2 = y2 + yDiff
yDiff = 0
xDiff = 0
y2 = 0
x2 = 0
map2: List[str] = []
map2 = ["..#.......",
    "..#.......",
    "...####...",
    "..........",
    "..........",
    "..........",
    "..........",
    "..........",
    "...####...",
    "..........",
    ".........."]
x2 = 0
y2 = 0

def on_forever():
    basic.clear_screen()
    move()
    renderView()
basic.forever(on_forever)

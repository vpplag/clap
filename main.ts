input.onSound(DetectedSound.Loud, function () {
    soundExpression.giggle.play()
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.clearScreen()
})

function addSolveTime(player, seconds) {
    player.times.push(seconds)
}

const measureSolveTime = function(fn) {
    let startTime = Date.now()
    fn()
    let endTime = Date.now()
    const solvwTimeMili = endTime - startTime
    const solvetimeseconds = solvwTimeMili / 1000
    return solvetimeseconds
}

export default {addSolveTime, measureSolveTime}
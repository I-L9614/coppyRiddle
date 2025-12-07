import allRiddles from './riddles/imports.js'
import  input  from "analiza-sync"
import  createPlayer from './utils/player.js'
import  askRiddle  from './utils/riddlefun.js'
import timeHandl from './utils/timeHandl.js'
import showStats from './utils/stats.js'

const game = function (riddles) {
    
    console.log("Welcom to riddle game")
    const name = input('enter your name:')
    let player = createPlayer(name)
    for(let i=0;i<riddles.length;i++) {
        const time = timeHandl.measureSolveTime(() => askRiddle(riddles[i]))
        console.log(player)
        console.log(time)
        timeHandl.addSolveTime(player,time)
    }
    showStats(player)

}
game(allRiddles)

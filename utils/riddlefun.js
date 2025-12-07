import input from "analiza-sync"
const askRiddle = function (riddleObj) {
    console.log(riddleObj.name)
    console.log(riddleObj.taskDescripaion)
    if (riddleObj.choices) {
        console.log(riddleObj.choices)
        let choise = input('enter your choise number ro field to see choices as numbers: ')
        if (choise === 'field') {
            console.log(`0:${riddleObj.choices[0]},1:${riddleObj.choices[1]},2:${riddleObj.choices[2]}`)
            choise = input('enter your choise number!')
            while (!choise === riddleObj.correctAnswer)
                choise = input('wrong enswer.try again')

        } else {
            while (!choise === riddleObj.correctAnswer) {
                choise = input('wrong enswer.try again')
            }
        }
    } else {
        let choise = input('enter your answer: ')
        while (!choise === riddleObj.correctAnswer) {
            choise = input('wrong enswer.try again')
        }
    }

}
export default askRiddle

const generateRandomNum = (num) => {
    return Math.floor(Math.random() * num)
}

let messages = {
    Good: ['You are such a smart person!', 'You are great in bed!', 'You smell nice when you shower!'],
    Mixed: ['You suck at life!', 'You make me want to vomit!', 'You are my best friend'],
    Bad: ['You are ugly!', 'You are snot good in bed!', 'You have no hair on your balls!', 'You rock my world!']
}

let newMessage = []

for(let props in messages){
    let optionID = generateRandomNum(messages[props].length)

    if(props === 'Good'){
        newMessage.push(`This message is from your mother: ${messages[props][optionID]}`)
    } else if(props === 'Mixed'){
        newMessage.push(`This message is from your friend: ${messages[props][optionID]}`)
    } else if (props === 'Bad'){
        newMessage.push(`This message is from your lover: ${messages[props][optionID]}`)
    } else {
        return `Error`
    }
}

let formatted = newMessage.join('\n')
console.log(formatted)
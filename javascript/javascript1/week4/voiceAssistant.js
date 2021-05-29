let myName = "";
// Name actions
function getReply(command) {


    if (command.includes('Hello my name is')) {
        var lastWord = command.split(" ").splice(-1)
        if (lastWord === " " && lastWord.length > 2) {
            return `Enter your name`;

        } else {
            return `Nice to meet you ${lastWord}`
        }
    }
    if (command.includes('What is my name')) {
        return `My name is Upasana`;
    }

    let toDo = [];
    const splitStr = command.split(" ");
    var str = splitStr.slice(0, -3)
    str.shift()
    let a = str.join(' ')
    toDo = str.push()

    if (command.includes("to my todo")) {
        return `${a} added to toDo`;
    }
    if (command.includes("from my todo")) {
        return `${a} removed from your todo`;
    }
    if (command.includes("What is on my todo?")) {
        return `you have ${toDo} todos`;
    }



    //today date
    if (command.includes("What day is it today")) {
        let date = new Date().toDateString().split(" ");
        console.log(`${date[2]}. of ${date[1]} ${date[3]}`)
    }


}
//calculations
function calculation(firstNumber, secondNumber, operator) {

    if (operator.includes("*" || "multiply" || "multiplication")) {
        return firstNumber * secondNumber;
    }
    if (operator.includes("/" || "divide" || "division")) {
        return firstNumber / secondNumber;
    }
    if (operator.includes("+" || "plus")) {
        return firstNumber + secondNumber;
    }
    if (operator.includes("-" || "minus")) {
        return firstNumber - secondNumber;
    }
}
//timer

function timer(command) {
    var timeInMinute = command.split(" ").slice(-8, -6)
    var timeInMilisecond = timeInMinute * 60000;
    setTimeout(setAlert, timeInMilisecond);
}

function setAlert() {
    alert("Timer done");
}




console.log(getReply("Hello my name is Upasana"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("remove fishing from my todo"));
console.log(calculation(29, 20, "-"));
console.log(timer("Timer set for 1 minute"));
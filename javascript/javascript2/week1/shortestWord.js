let danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
let shortestWord = 'hkjhkjhhkjjkjhkjhjkhkjhkhkjhhkjhkjhkjhkjhkjhkjh'

const body = document.querySelector('body')
const div = document.createElement('div')
body.appendChild(div)
div.innerHTML = `shortest word is : ${shortWord(danishWords)}`

function shortWord(danshWords) {
    for (let i = 0; i < danishWords.length; i++) {
        if (danishWords[i].length < shortestWord.length) {
            shortestWord = danishWords[i]
        }
    }
    return shortestWord;

}
let firstWords = ["Easy", "Awesome", "Corporate", "Flow", "Quill", "Beam", "Sun", "Puzzle", "Bakers", "Halo"];
let secondWords = ["Feer", "Paper", "Link", "Love", "Stop", "Group", "Sons", ".co", "Works", "Spec"];
const randomNumber = Math.floor(Math.random() * 10) + 0;
const randomNumber1 = Math.floor(Math.random() * 10) + 0;
let startupName = firstWords[randomNumber] + secondWords[randomNumber1]
let nameLength = startupName.length;
console.log(`The startup:"${startupName}" contains ${nameLength} characters`)
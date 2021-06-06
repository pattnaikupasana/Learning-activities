const animalList = ['Ether',
    'Kurse',
    'Phyntom',
    'Menos',
    'Brand',
    'The Vicious Servant',
    'The Wild Templar',
    'The Twin Stalker',
    'The Oblivious Wizard',
    'The Bloodied Wraith',
]


function spiritAnimalNamesGenerator(name) {
    return `${name} - ${animalList [parseInt(Math.random()*10)]}`
}

function clickButtons() {
    const getName = document.getElementById('inputText').value;
    if (getName !== '') {
        spiritName.innerHTML = spiritAnimalNamesGenerator(getName);
    } else {
        spiritName.innerHTML = 'Please write a name';
    }
}

const clickButton = document.querySelector('.name')
const spiritName = document.querySelector('h2');

clickButton.addEventListener('click', clickButtons)
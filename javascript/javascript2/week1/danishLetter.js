function danishCharacterCalcualtion(danishString) {
    const å = danishString.match(/å/g);
    const æ = danishString.match(/æ/g);
    const ø = danishString.match(/ø/g);
    let total = æ.length + å.length + ø.length;
    return `total: ${total}, æ: ${æ.length}, ø: ${ø.length}, ${å.length}: 1`;
}


let danishString = "Blå grød med røde bær"
const body1 = document.querySelector('body')
const div1 = document.createElement('div')
body.appendChild(div1)
div1.innerHTML = `number of danish letters : ${danishCharacterCalcualtion(danishString)}`
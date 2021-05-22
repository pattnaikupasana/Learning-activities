//save a note//
const notes = [];

function saveNote(content, id) {
    let arrayIndex = {
        content: content,
        id: id,
    };
    notes.push(arrayIndex);
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);
/* now arrar is 
const notes=[
    {
    content:Pick up groceries,
    id:1
},
{
    content:Do laundry,
    id:2
}]
*/
//Get a note//
function getNote(id) {
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === id) {
            return notes[i];
        }
    }
    return `id is not found`;
}
console.log(getNote(1));

//Log out notes//


function logOutNotesFormatted() {
    {
        for (let i = 0; i < notes.length; i++) {
            console.log(`The note with id:${notes[i].id}, has the following note text:${notes[i].content}`)
        }
    }
}
logOutNotesFormatted();
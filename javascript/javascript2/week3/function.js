/*Create funtions that are used in these different ways
Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.*/
const add = (a, b) => {
    return a + b;
}
const subtract = (a, b) => {
    return a - b;
}
const multiply = (a, b) => {
    return a * b;
}
const arrayOfFunctions = [add, subtract, multiply];

arrayOfFunctions.forEach(element => {
    console.log(element(100, 2));
});

//Create a function as a const and try creating a function normally. Call both functions.
const firstFunction = () => {
    console.log(`function as a const`);
};

function secondFunction() {
    console.log(`function normally`);
}

firstFunction();
secondFunction();

//Create an object that has a key whose value is a function. Try calling this function.
const object = {
    Id: 1,
    Name: function() {
        console.log(`object that has a key whose value is a function`);
    }
};

object.Name();
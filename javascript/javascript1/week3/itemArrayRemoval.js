const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
];
for (let i = 0; i < names.length; i++) {
    if (names[i] == "Ahmad") {
        names.splice(i, 1);
    }
}
console.log(names)
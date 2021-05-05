let dogYearOfBirth, dogYearFuture, dogYear;
dogYearOfBirth = 2011;
dogYearFuture = 2060;
dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = confirm("Do you want to see the number in dogyears ?")
if (shouldShowResultInDogYears) {
    dogYear *= 7;
    console.log(`Your dog will be ${dogYear} dog years old in 2027`)
} else {
    console.log(`Your dog will be ${dogYear} human years old in 2027`)
}


/*let dogYearOfBirth, dogYearFuture, dogYear;
dogYearOfBirth = prompt("Enter birth year");
dogYearFuture = prompt("Enter the year you want to calculate");
dogYear = dogYearFuture - dogYearOfBirth;
console.log(`Your dog will be ${dogYear} human years old in 2027`)
let shouldShowResultInDogYears = confirm("Do you want to see the number in dogs years ?")
if (shouldShowResultInDogYears) {
    dogYear *= 7;
    console.log(`Your dog will be ${dogYear} dog years old in 2027`)
}*/
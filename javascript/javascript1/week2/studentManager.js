let class07Students = []

function addStudentToClass(studentName, isQueen) {
    const n = (isQueen === true) ? 6 : 5;
    if (isQueen == 'true') {
        class07Students.push(studentName)
    } else if (class07Students.includes(studentName)) {
        return (`Student ${studentName} is already in class`)
    } else if (class07Students.length > n) {
        return ('Class is full.')
    } else if (studentName == '' || studentName.length < 2) {
        return ('You need add something.')
    } else {
        class07Students.push(studentName)
        return ('Welcome to class')
    }
}
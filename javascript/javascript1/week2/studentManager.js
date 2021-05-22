let class07Students = []

function addStudentToClass(studentName, isQueen) {
    const totalStudent = (isQueen === true) ? 6 : 5;
    if (isQueen == 'true') {
        class07Students.push(studentName)
    }
    if (class07Students.includes(studentName)) {
        return `Student ${studentName} is already in class`
    }
    if (class07Students.length > totalStudent) {
        return 'Class is full'
    }
    if (studentName == '' || studentName.length < 2) {
        return 'You need add something'
    } else {
        class07Students.push(studentName)
        return 'Welcome to class'
    }
}
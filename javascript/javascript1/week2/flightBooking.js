function getFullName(firstName, surName, useFormalName, gender) {

    if (useFormalName) {
        if (gender == "male") {
            return (`Lord ${firstName} ${surName}`);
        } else {
            return (`Lady ${firstName} ${surName}`);
        }

    } else {
        return (`${firstName} ${surName}`);
    }
}
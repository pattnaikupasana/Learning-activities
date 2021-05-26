const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};

function getTravelTimeInDecimal(traveltoreachDestination) {
    return travelInformation.destinationDistance / travelInformation.speed
}

function totalTime(traveltoreachDestination) {
    const time = getTravelTimeInDecimal();
    const hours = Math.floor(getTravelTimeInDecimal())
    const minutes = Math.round((time - hours) * 60);
    return `${hours} Hours and ${minutes} Minutes`
}
console.log(totalTime());
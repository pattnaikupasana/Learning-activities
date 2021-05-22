const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};

function totalTime(traveltoreachDestination) {
    const time = (travelInformation.destinationDistance) / (travelInformation.speed);
    const hours = Math.floor(travelInformation.destinationDistance / travelInformation.speed)
    const minutes = Math.floor((time - hours) * 60);
    return `${hours} Hours and ${minutes} Minutes`
}
console.log(totalTime());
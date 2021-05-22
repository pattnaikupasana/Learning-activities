const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function calculateWeekday(eventDaysNumber) {
    const eventDay = (new Date().getDay() + eventDaysNumber) % 7;
    return weekdays[eventDay];
}
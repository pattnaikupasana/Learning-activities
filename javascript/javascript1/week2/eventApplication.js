function calculateWeekday(eventDaysNumber) {
    let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    let eventDay = (new Date().getDay() + eventDaysNumber) % 7;
    return weekdays[eventDay];
}
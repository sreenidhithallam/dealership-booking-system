const { convertFrom12To24Format, convertHoursToMinutes } = require('./date-utils');
const {
    DEALERSHIP_WORKING_HOURS,
    BOOKING_DURATION_IN_HOURS,
    HOUR_TO_MINUTE,
} = require('../constants');

/* The below function checks whether the given date is working day or not
    and also checks whether the give time is within dealer's working hours */

function isBookingInsideWorkingWindow(bookingDateTime) {
    const bookingDay = new Date(bookingDateTime).getDay();
    if (bookingDay === 0 || bookingDay === 6) {
        return false;
    }
    const bookingStartHour = new Date(bookingDateTime).getHours();
    const bookingStartMinute = new Date(bookingDateTime).getMinutes();

    const bookingStartTimeInMinutes = convertHoursToMinutes(bookingStartHour, bookingStartMinute);
    const bookingEndTimeInMinutes =
        bookingStartTimeInMinutes + BOOKING_DURATION_IN_HOURS * HOUR_TO_MINUTE;

    const { hours: dealerStartHour, minutes: dealerStartMinute } = convertFrom12To24Format(
        DEALERSHIP_WORKING_HOURS.START_TIME,
    );
    const { hours: dealerEndHour, minutes: dealerEndMinute } = convertFrom12To24Format(
        DEALERSHIP_WORKING_HOURS.END_TIME,
    );

    const dealerStartTimeInMinutes = convertHoursToMinutes(dealerStartHour, dealerStartMinute);
    const dealerEndTimeInMinutes = convertHoursToMinutes(dealerEndHour, dealerEndMinute);

    if (
        dealerStartTimeInMinutes <= bookingStartTimeInMinutes &&
        bookingEndTimeInMinutes <= dealerEndTimeInMinutes
    ) {
        return true;
    }
    return false;
}

module.exports = {
    isBookingInsideWorkingWindow,
};

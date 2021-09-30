const { BOOKING_DURATION_IN_HOURS, HOUR_TO_MINUTE } = require('../constants');

/* The below function checks whether the given booking datetime is overlaping with the existing bookings */
function dateRangeOverlaps(StartA, StartB) {
    const EndA = getEndDateTime(StartA);
    const EndB = getEndDateTime(StartB);

    return !(EndA <= StartB || StartA >= EndB);
}

/* The below function returns end datetime for the given start datetime taking into booking duration into consideration */
function getEndDateTime(startDateTime) {
    let endDateTime = new Date(startDateTime);
    endDateTime.setHours(endDateTime.getHours() + BOOKING_DURATION_IN_HOURS);

    return endDateTime.toISOString();
}

/* The below function converts 12 hour time format to 24 hour time format */
function convertFrom12To24Format(time12) {
    const [sHours, minutes, period] = time12.match(/([0-9]{1,2}):([0-9]{2}) (AM|PM)/).slice(1);
    const PM = period === 'PM';
    const hours = (+sHours % 12) + (PM ? 12 : 0);
    return {
        hours: +hours,
        minutes: +minutes,
    };
}

/* The below function converts hours and minutes into minutes */
function convertHoursToMinutes(hours, minutes) {
    return hours * HOUR_TO_MINUTE + minutes;
}

module.exports = {
    dateRangeOverlaps,
    convertFrom12To24Format,
    convertHoursToMinutes,
};

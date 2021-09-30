const loki = require('lokijs');

const { DEFAULT_BOOKING_CAPACITY } = require('../constants');

const db = new loki('bookings.json');

let bookings = db.getCollection('bookings');
let bookingCapacity = db.getCollection('bookingCapacity');

/* The below function configures bookings and bookingCapacity collections
   And also sets default value for bookingCapacity if not present */

function databaseInitialize() {
    if (bookings === null) {
        bookings = db.addCollection('bookings');
    }

    if (bookingCapacity === null) {
        bookingCapacity = db.addCollection('bookingCapacity');
        bookingCapacity.insert({
            bookingCapacity: DEFAULT_BOOKING_CAPACITY,
        });
    }
}

/* The below function loads the database if present */

function loadDatabase() {
    db.loadDatabase({}, function () {
        databaseInitialize();
    });
}

/* The below function returns the booking capacity */

function getCapacity() {
    return bookingCapacity.chain().data({ removeMeta: true })[0];
}

/* The below function updates the booking capacity */

function setCapacity(capacity) {
    bookingCapacity
        .chain()
        .find('bookingCapacity')
        .update(function (obj) {
            obj.bookingCapacity = capacity;
        });
    db.saveDatabase();
}

/* The below function returns all the bookings */

function getBookings() {
    return bookings.chain().data({ removeMeta: true });
}

/* The below function returns all the bookings for the given date */

function getBookingsBasedOnDate(date) {
    return bookings
        .chain()
        .find({ bookingDateTime: { $regex: date } })
        .data({ removeMeta: true });
}

/* The below function returns all the bookings for the given VIN */

function getBookingsBasedOnVIN(VIN) {
    return bookings.chain().find({ 'vehicle.VIN': VIN }).data({ removeMeta: true });
}

/* The below function inserts booking */

function addBooking(booking) {
    bookings.insert(booking);
    db.saveDatabase();
}

module.exports = {
    addBooking,
    getBookings,
    getBookingsBasedOnDate,
    getBookingsBasedOnVIN,
    getCapacity,
    setCapacity,
    loadDatabase,
};
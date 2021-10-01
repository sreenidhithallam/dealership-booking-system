const { httpCodes } = require('../../constants/http-codes');
const { createBookingHelper, retrieveBookingsHelper } = require('./booking-helper');

function createBooking(req, res) {
    try {
        createBookingHelper(req.body);
        return res.status(httpCodes.created).send('Successfully created the booking');
    } catch (err) {
        return res.status(httpCodes.badRequest).send(err);
    }
}

function retrieveBookings(req, res) {
    try {
        const bookings = retrieveBookingsHelper(req.query);
        return res.status(httpCodes.ok).send({ bookings });
    } catch(err) {
        return res.status(httpCodes.badRequest).send(err);
    }
}
module.exports = {
    createBooking,
    retrieveBookings,
};

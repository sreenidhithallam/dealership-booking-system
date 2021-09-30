const { httpCodes } = require('../../constants/http-codes');
const { getBookingCapacityHelper, setBookingCapacityHelper } = require('./booking-capacity-helper');

function getBookingCapacity(req, res) {
    const bookingCapacity = getBookingCapacityHelper();

    return res.status(httpCodes.ok).send(bookingCapacity);
}

function setBookingCapacity(req, res) {
    try {
        let response = setBookingCapacityHelper(req.body);

        return res
            .status(httpCodes.created)
            .send(`The booking capacity is updated to ${response.bookingCapacity}`);
    } catch (err) {
        return res.status(httpCodes.badRequest).send(err);
    }
}

module.exports = {
    getBookingCapacity,
    setBookingCapacity,
};


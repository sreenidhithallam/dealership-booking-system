const { GraphQLObjectType, GraphQLInt, GraphQLNonNull } = require('graphql');

const { BookingCapacityType } = require('../../typedefs');
const {
    getBookingCapacityHelper,
    setBookingCapacityHelper,
} = require('../../../controller/booking-capacity/booking-capacity-helper');

const getBookingCapacity = {
    type: GraphQLInt,
    description: 'Get the booking capacity',
    resolve: () => {
        return getBookingCapacityHelper().bookingCapacity;
    },
};

const setBookingCapacity = {
    type: BookingCapacityType,
    description: 'Set the booking capacity',
    args: {
        bookingCapacity: { type: GraphQLNonNull(GraphQLInt) },
    },
    resolve: (parent, args) => {
        try {
            return setBookingCapacityHelper(args);
        } catch (err) {
            throw new Error(`${err.code}: ${err.message}`);
        }
    },
};

module.exports = {
    getBookingCapacity,
    setBookingCapacity,
};

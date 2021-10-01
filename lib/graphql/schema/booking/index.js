const { GraphQLString, GraphQLList, GraphQLNonNull, GraphQLUnionType } = require('graphql');

const { BookingType, CustomerInputType, VehicleInputType } = require('../../typedefs');
const {
    createBookingHelper,
    retrieveBookingsHelper,
} = require('../../../controller/booking/booking-helper');

const bookings = {
    type: new GraphQLList(BookingType),
    description: 'List all the bookings',
    args: {
        VIN: { type: GraphQLString },
        bookingDateTime: { type: GraphQLString },
    },
    resolve: (parent, args) => {
        try {
            return retrieveBookingsHelper(args);
        } catch(err) {
            throw new Error(`${err.code}: ${err.message}`);
        }  
    },
};

const addBooking = {
    type: BookingType,
    description: 'Add the Booking',
    args: {
        customer: { type: CustomerInputType },
        vehicle: { type: VehicleInputType },
        bookingDateTime: { type: GraphQLNonNull(GraphQLString) },
    },
    resolve: (parent, args) => {
        const booking = {
            customer: {
                name: args.customer.name,
                phoneNumber: args.customer.phoneNumber,
                email: args.customer.email,
            },
            vehicle: {
                make: args.vehicle.make,
                model: args.vehicle.model,
                VIN: args.vehicle.VIN,
            },
            bookingDateTime: args.bookingDateTime,
        };
        try {
            return createBookingHelper(booking);
        } catch (err) {
            if (Array.isArray(err)) {
                const message = err.map((e) => `${e.code}: ${e.message}`).join(', ');
                throw new Error(message);
            } else {
                throw new Error(`${err.code}: ${err.message}`);
            }
        }
    },
};

module.exports = {
    bookings,
    addBooking,
};

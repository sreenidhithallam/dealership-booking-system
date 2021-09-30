const { GraphQLSchema, GraphQLObjectType } = require('graphql');

const { bookings, addBooking } = require('./schema/booking');
const { getBookingCapacity, setBookingCapacity } = require('./schema/booking-capacity');

const query = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
        bookings,
        getBookingCapacity,
    }),
});

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Root Mutation',
    fields: () => ({
        addBooking,
        setBookingCapacity,
    }),
});

const schema = new GraphQLSchema({
    query,
    mutation,
});

module.exports = {
    schema,
};

const {
    GraphQLNonNull,
    GraphQLInt,
    GraphQLString,
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLList,
} = require('graphql');

const CustomerType = new GraphQLObjectType({
    name: 'customer',
    description: 'This represents a customer',
    fields: () => ({
        name: { type: GraphQLNonNull(GraphQLString) },
        phoneNumber: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
    }),
});

const VehicleType = new GraphQLObjectType({
    name: 'vehicle',
    description: 'This represents a vehicle',
    fields: () => ({
        make: { type: GraphQLNonNull(GraphQLString) },
        model: { type: GraphQLNonNull(GraphQLString) },
        VIN: { type: GraphQLNonNull(GraphQLString) },
    }),
});

const BookingType = new GraphQLObjectType({
    name: 'booking',
    description: 'This represents a booking booked by a customer for a vehicle',
    fields: () => ({
        customer: { type: CustomerType },
        vehicle: { type: VehicleType },
        bookingDateTime: { type: GraphQLNonNull(GraphQLString) },
    }),
});

const BookingCapacityType = new GraphQLObjectType({
    name: 'capacity',
    description: 'This represents booking capacity',
    fields: () => ({
        bookingCapacity: { type: GraphQLNonNull(GraphQLInt) },
    }),
});

const CustomerInputType = new GraphQLInputObjectType({
    name: 'customerInputType',
    description: 'Input format for customer data',
    fields: () => ({
        name: { type: GraphQLNonNull(GraphQLString) },
        phoneNumber: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
    }),
});

const VehicleInputType = new GraphQLInputObjectType({
    name: 'vehicleInputType',
    description: 'Input format for vehicle data',
    fields: () => ({
        make: { type: GraphQLNonNull(GraphQLString) },
        model: { type: GraphQLNonNull(GraphQLString) },
        VIN: { type: GraphQLNonNull(GraphQLString) },
    }),
});

module.exports = {
    BookingType,
    BookingCapacityType,
    CustomerInputType,
    VehicleInputType,
};

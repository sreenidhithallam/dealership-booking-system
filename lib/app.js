const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');

const {
    getBookingCapacity,
    setBookingCapacity,
} = require('./controller/booking-capacity/booking-capacity');
const { createBooking, retrieveBookings } = require('./controller/booking/booking');
const swaggerDocument = require('./swagger/swagger-view.json');
const { DEFAULT_PORT } = require('./constants');
const { loadDatabase } = require('./db-operations/operations');
const { schema } = require('./graphql');

const app = express();

loadDatabase();

/* The routes are
    1. /graphql - graphql
    2. /docs - swagger docs
    3. GET /bookingCapacity - gets the dealer's booking capacity 
    4. PUT /bookingCapacity - updates the dealer's booking capacity 
    5. GET /bookings - gets the bookings
    6. POST /bookings - creates the booking
*/

app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        graphiql: true,
    }),
);

app.use('/docs', swaggerUi.serve);

app.get('/docs', swaggerUi.setup(swaggerDocument));

app.use(bodyParser.json());

app.get('/bookingCapacity', getBookingCapacity);

app.put('/bookingCapacity', setBookingCapacity);

app.get('/bookings', retrieveBookings);

app.post('/booking', createBooking);

app.listen(DEFAULT_PORT);

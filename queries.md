## Query to fetch booking capacity

```
{
  getBookingCapacity
}
```

## Mutation to update booking capacity

```
mutation {
  setBookingCapacity(bookingCapacity: 3) {
    bookingCapacity
  }
}
```

## Query to fetch bookings
```
{
  bookings {
    customer {
      name
      phoneNumber
      email
    }
    vehicle {
      make
      model
      VIN
    }
    bookingDateTime
  }
}
```

## Query to fetch bookings based on VIN
```
{
  bookings(VIN: "12345678904987653") {
    customer {
      name
      phoneNumber
      email
    }
    vehicle {
      make
      model
      VIN
    }
    bookingDateTime
  }
}
```

## Query to fetch bookings based on booking datetime
```
{
  bookings(bookingDateTime: "2021-09-27T04:21:46.794Z") {
    customer {
      name
      phoneNumber
      email
    }
    vehicle {
      make
      model
      VIN
    }
    bookingDateTime
  }
}
```

## Mutation to add booking
```
mutation {
  addBooking(bookingDateTime: "2021-09-27T04:21:46.794Z", 
    customer: {name: "test", email: "sre@dfd.com", 
      phoneNumber: "342425254533"}, 
    vehicle: {make: "volvo", model: "SUV", VIN: "12345678904987653"}) {
    customer {
      name
      phoneNumber
      email
    }
    vehicle {
      make
      model
      VIN
    }
    bookingDateTime
  }
}
```

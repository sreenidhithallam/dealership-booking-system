# BookNow - Dealership Booking System

## Overview
BookNow is an MVP program that would manage bookings for a Dealership. The program should be able to accept or reject bookings based on availabilities. Initially I have built the project using REST and utilized Swagger UI. Later, I have added GraphQL support as well. Thus I have included both the REST endpoints and GraphQL endpoint in this repo with appropriate execution steps.

## Technologies Used
- NodeJS
- GraphQL
- LokiDB 
- REST
- Swagger UI
-  Mocha, Chai and Sinon

## Highlights

- The application is accessible by REST endpoints.
- The application is accessible by GraphQL endpoint.
- The application is accessible via Swagger UI Docs.

- Backend is developed by Node JS.
- Loki DB is used as an in-memory database.
- Prettier is used as a  code formatter.
- Eslint is used for lint-check.
- Mocha, Chai and Sinon are used for testing


## Project Details

### Definition
- The working hours of a dealership is 9AM - 5PM 
- A Booking is 2 hours long. 

#### Booking Capacity Endpoint: 
The booking capacity should be able to be define via an endpoint (default should be 2). Meaning that 2 bookings can be executed at the same time. 

#### Booking creation Endpoint: 
An endpoint that allows us to create a Booking, with the following data: 

**Customer:** 
- Customer Name
- Customer Email 
- Customer Phone Number 

**Vehicle:** 
- Vehicle Make 
- Vehicle Model 
- Vehicle VIN (17 length String) 

**Booking:** 
- Date/Time 
Return proper error if booking isn't possible (exceeds capacity, outside of working hours). 
Booking Retrieval Endpoint: 
Endpoint that would return all the Bookings for a provided Day. 
Extra points: 
Endpoint that would return the bookings for a vehicle VIN.


### Instructions to run

## 1. Clone the project
```bash
$ git clone https://github.com/sreenidhithallam/vehicle-booking-system.git
```

```bash
$ cd vehicle-booking-system
```

## 2. Install packages


```
$ npm install
```

## 3. Running the app

```
$ npm start
```


## 4. EndPoints

The project has been implemented with both REST and GraphQL.

### REST Endpoints

    1. GET /bookingCapacity - gets the dealer's booking capacity 
    2. PUT /bookingCapacity - updates the dealer's booking capacity 
    3. GET /bookings - gets the bookings
    4. POST /bookings - creates the booking

### Swagger Endpoint
Open the swagger docs endpoint on: http://localhost:3000/docs

### GraphQL Endpoint
Open the graphQL endpoint on: http://localhost:3000/graphql



###  Screenshots

  ## Fig 1 :  
  ![Screenshot](https://github.com/sreenidhithallam/vehicle-booking-system/blob/main/screenshots/getBookingCapacity_default.png)
  
  ## Fig 2 : 
  ![Screenshot](https://github.com/sreenidhithallam/vehicle-booking-system/blob/main/screenshots/setBookingCapacity.png)
  ![Screenshot](https://github.com/sreenidhithallam/vehicle-booking-system/blob/main/screenshots/getBookingCapacity_postUpdate.png)
   
  ## Fig 3 :  
  ![Screenshot](https://github.com/sreenidhithallam/vehicle-booking-system/blob/main/screenshots/invalidBookingCapacity.png)
 
  ## Fig 4 : 
  ![Screenshot](https://github.com/sreenidhithallam/vehicle-booking-system/blob/main/screenshots/getBookings_default.png)
 
  ## Fig 5 : 
  ![Screenshot](https://github.com/sreenidhithallam/vehicle-booking-system/blob/main/screenshots/addBooking.png)
  
  ## Fig 6 : 
  ![Screenshot](https://github.com/sreenidhithallam/vehicle-booking-system/blob/main/screenshots/getBookings_all.png)
  
  ## Fig 7 :
  ![Screenshot](https://github.com/sreenidhithallam/vehicle-booking-system/blob/main/screenshots/getBookings_bookingDateTime.png)
  
  ## Fig 8 :
  ![Screenshot](https://github.com/sreenidhithallam/vehicle-booking-system/blob/main/screenshots/invalidInputs.png)
  
  ## Fig 9 : 
  ![Screenshot](https://github.com/sreenidhithallam/vehicle-booking-system/blob/main/screenshots/invalidVehicleVIN.png)
  
  ## Fig 10 : 
  ![Screenshot](https://github.com/sreenidhithallam/vehicle-booking-system/blob/main/screenshots/outsideWorkingHours.png)
  
  ## Fig 11 : 
  ![Screenshot](https://github.com/sreenidhithallam/vehicle-booking-system/blob/main/screenshots/exceedsCapacity.png)
  
  ## Fig 12 : Test Case Execution
  ![Screenshot](https://github.com/sreenidhithallam/vehicle-booking-system/blob/main/screenshots/tests_1.png)
  ![Screenshot](https://github.com/sreenidhithallam/vehicle-booking-system/blob/main/screenshots/tests_2.png)
  ![Screenshot](https://github.com/sreenidhithallam/vehicle-booking-system/blob/main/screenshots/testCoverage.png)
    
  ## Fig 13 : Swagger Docs
  ![Screenshot](https://github.com/sreenidhithallam/vehicle-booking-system/blob/main/screenshots/swagger.png)
  
  ## Fig 14 : Screenshots of all steps available [here](https://github.com/sreenidhithallam/vehicle-booking-system/tree/main/screenshots)
  
  
###  Future Improvements


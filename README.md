<h2 align="center">BookNow</h2>
<p align="center">Dealership Booking System</p>

<p align="center">
  <a href="https://nodejs.org/en/download/">
    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=whites" alt="Version">
  </a>
  <a href="https://graphql.org/">
    <img src="https://img.shields.io/badge/GraphQl-E10098?style=for-the-badge&logo=graphql&logoColor=white" alt="Code Version">
  </a>
   <a href="https://github.com/techfort/LokiJS">
    <img src="https://img.shields.io/badge/LokiJS-E10029?style=for-the-badge&logo=lokidb&logoColor=white" alt="Code Version">
  </a>
  <a href="https://restfulapi.net/">
    <img src="https://img.shields.io/badge/REST-1572B6?style=for-the-badge&logo=restapi&logoColor=white" alt="Code Version">
  </a>
   <a href="https://swagger.io/tools/swagger-ui/">
    <img src="https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white" alt="Code Version">
  </a>
   <a href="https://mochajs.org/">
    <img src="https://img.shields.io/badge/-Mocha-%238D6748?style=for-the-badge&logo=mocha&logoColor=white" alt="Code Version">
  </a>
  <a href="https://www.chaijs.com/">
    <img src="https://img.shields.io/badge/-Chai-B1361E?style=for-the-badge&logo=chai&logoColor=white" alt="Code Version">
  </a>
  <a href="https://sinonjs.org/">
    <img src="https://img.shields.io/badge/-Sinon-372213?style=for-the-badge&logo=sinon&logoColor=white" alt="Code Version">
  </a>
 <a href="https://eslint.org/">
    <img src="https://img.shields.io/badge/-Eslint-6933FF?style=for-the-badge&logo=eslint&logoColor=white" alt="Code Version">
  </a>
   <a href="https://prettier.io/">
    <img src="https://img.shields.io/badge/-Prettier-092E20?style=for-the-badge&logo=prettier&logoColor=white" alt="Code Version">
  </a>
  
  </a>
</p>
<br>


## Overview
BookNow is an MVP program that could be used to manage bookings for a Dealership. The program is able to accept or reject bookings based on availabilities. Initially I have built the project using REST and utilized Swagger UI. Later, I have added GraphQL support as well. Thus I have included both the REST endpoints as well as  GraphQL endpoint in this repo with appropriate execution steps.

## Repo Details

High level directory structure for this repository:

```bash
├───lib
│   ├───constants 
│   ├───controller
│   │   ├───booking
│   │   └───booking-capacity
│   ├───db-operations
│   ├───errors
│   ├───graphql
│   │   ├───schema
│   │   │   ├───booking
│   │   │   └───booking-capacity
│   │   └───typedefs
│   ├───helper
│   └───swagger
├───screenshots
└───test
    └───lib
        ├───controller
        │   ├───booking
        │   └───booking-capacity
        └───helper
```        

## Highlights

- The application is accessible by both [GraphQL](https://graphql.org/) and [REST](https://restfulapi.net/) endpoints.
- The application is also accessible via [Swagger UI](https://swagger.io/tools/swagger-ui/) Docs.

- Backend is developed by [Node Js](https://nodejs.org/en/download/).
- [LokiJS](https://github.com/techfort/LokiJS) is used as an in-memory database.
- [Prettier](https://prettier.io/) is used as a  code formatter.
- [Eslint](https://eslint.org/) is used for lint-check.
- [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/), [Sinon](https://sinonjs.org/) are used for testing.


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

The app will return proper error if booking isn't possible (exceeds capacity, outside of working hours). 

#### Booking Retrieval Endpoint: 
Endpoint that would return all the Bookings for a provided Day. 

#### Extra points: 
Endpoint that would return the bookings for a vehicle VIN.

#### Assumptions
1.  As the booking is allowed only till 5 PM and every booking is 2 hours long, the last legitimate booking can happen only till 3 PM.
2.  Saturday & Sunday are considered as holidays. 

## Instructions to run

### 1. Clone the project
```bash
$ git clone https://github.com/sreenidhithallam/vehicle-booking-system.git
```

```bash
$ cd vehicle-booking-system
```

### 2. Install packages


```
$ npm install
```

### 3. Run the app

```
$ npm start
```


## EndPoints

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



##  Screenshots

  ### Fig 1 : Default value for booking capacity
  ![Screenshot](https://github.com/sreenidhithallam/vehicle-booking-system/blob/main/screenshots/getBookingCapacity_default.png)
  
  ### Fig 2 : Set/Get booking capacity
  ![Screenshot](https://github.com/sreenidhithallam/vehicle-booking-system/blob/main/screenshots/setBookingCapacity.png)
  ![Screenshot](https://github.com/sreenidhithallam/vehicle-booking-system/blob/main/screenshots/getBookingCapacity_postUpdate.png)
   
  ### Fig 3 : Invalid booking capacity Value
  ![Screenshot](https://github.com/sreenidhithallam/vehicle-booking-system/blob/main/screenshots/invalidBookingCapacity.png)
 
  ### Fig 4 : Get bookings default
  ![Screenshot](https://github.com/sreenidhithallam/vehicle-booking-system/blob/main/screenshots/getBookings_default.png)
 
  ### Fig 5 : Add valid booking
  ![Screenshot](https://github.com/sreenidhithallam/vehicle-booking-system/blob/main/screenshots/addBooking.png)
  
  ### Fig 6 : Get all bookings
  ![Screenshot](https://github.com/sreenidhithallam/vehicle-booking-system/blob/main/screenshots/getBookings_all.png)
  
  ### Fig 7 : Filter bookings based on booking Date
  ![Screenshot](https://github.com/sreenidhithallam/vehicle-booking-system/blob/main/screenshots/getBookings_bookingDateTime.png)
  
  ### Fig 8 : Filter bookings based on VIN
  ![Screenshot](https://github.com/sreenidhithallam/dealership-booking-system/blob/main/screenshots/getBookings_VIN.png)
  
  ### Fig 9 : Invalid inputs
  ![Screenshot](https://github.com/sreenidhithallam/vehicle-booking-system/blob/main/screenshots/invalidInputs.png)
  
  ### Fig 10 : Invalid vehicle VIN
  ![Screenshot](https://github.com/sreenidhithallam/vehicle-booking-system/blob/main/screenshots/invalidVehicleVIN.png)
  
  ### Fig 11 : Booking outside working hours
  ![Screenshot](https://github.com/sreenidhithallam/vehicle-booking-system/blob/main/screenshots/outsideWorkingHours.png)
  
  ### Fig 12 : Exceeds capacity
  ![Screenshot](https://github.com/sreenidhithallam/vehicle-booking-system/blob/main/screenshots/exceedsCapacity.png)
  
  ### Fig 13 : Test case execution
  ![Screenshot](https://github.com/sreenidhithallam/dealership-booking-system/blob/main/screenshots/test_case_1.png)
  ![Screenshot](https://github.com/sreenidhithallam/dealership-booking-system/blob/main/screenshots/test_case_2.png)
  ![Screenshot](https://github.com/sreenidhithallam/dealership-booking-system/blob/main/screenshots/test_coverage.png)
    
  ### Fig 14 : Swagger docs
  ![Screenshot](https://github.com/sreenidhithallam/vehicle-booking-system/blob/main/screenshots/swagger.png)
  
  ### Screenshots of all steps available [here](https://github.com/sreenidhithallam/vehicle-booking-system/tree/main/screenshots)
  
  
##  Future Improvements
1. Build a front end and integrate it with backend.
2. Add Logging Framework to log to the right log files with appropriate log level.
3. Connect to a real DB instead of in-memory DB.
4. Integrate security scans.


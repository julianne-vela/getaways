# Getaways

An app for booking amazing getaway vacations.

## Getting Started

**Prerequisites**

-   Install [MongoDB](https://docs.mongodb.com/manual/administration/install-community/)
-   (Optional) Install [MongoDB Compass](https://docs.mongodb.com/compass/current/)

Once you've cloned the repo, you'll need to start both the backend and frontend for the app. From the repo's directory, run:

```bash
# Start the backend API
cd bookings-api
cp .env-example .env # Copy the example .env file
npm install
npm start

# In a separate terminal, start the frontend web client
cd bookings-web
cp .env-example .env # Copy the example .env file
npm install
npm start
```

### Lab Ideas

The goal of this lab is to provide an example of tackling work in an existing codebase. It's meant to serve as a way to acclimate you to the process of diving into a codebase, reading and understanding what's currently implemented, and then using that understanding to add on & improve the project.

The lab ideas below are a combination of feature requests, bugs to fix, and tech debt. If you have an idea for something to add, feel free to [create an issue](https://github.com/alchemycodelab/getaways/issues/new).

## Utility

-   [x] ~~Add "Loading..." State (1 point)~~

## Places

-   [x] ~~Style Places List (2 points)~~
-   [x] ~~<span style="color:red">**Add Place Detail Page (3 points)**</span>~~
-   [x] ~~<span style="color:red">**Add Places List Pagination - API (2 points)**</span>~~
-   [x] ~~<span style="color:red">**Add Places List Pagination - client (2 points)**</span>~~
-   [ ] Add "Create Booking" Page (4 points)
-   [ ] Create "Cancel Booking" Endpoint (2 points)
    -   [ ] Add "Cancel Booking" Page (2 points)

## Users

-   [x] ~~Add User Registration Page (2 points)~~
-   [x] ~~Add Login Page (2 points)~~
-   [x] ~~<span style="color:red">**Add Logout Button/Page (2 points)**</span>~~
-   [ ] Create "Edit User" Endpoint (2 points)

    -   [ ] Create "Edit User" Page (2 points)

-   [x] ~~Prevent duplicate users from being created (1 point)~~
-   [x] ~~<span style="color:red">**Require email, username, and password when creating a new user (1 point)**</span>~~

## Testing

-   [ ] Add API Tests (1 point)
-   [ ] Add Front End Tests (3 points)

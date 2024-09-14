# Express.js CRUD Application with MongoDB

This project is a basic CRUD (Create, Read, Update, Delete) application built with Express.js and Mongoose to interact with MongoDB.

## Overview

This application performs the following operations on a MongoDB database:

1. **Create**: Add a new user with predefined values.
2. **Read**: Retrieve all users or a specific user by their username.
3. **Update**: Modify an existing user's information.
4. **Delete**: Remove a user from the database by their username.

## Endpoints

### 1. Create a User

- **URL:** `/create`
- **Method:** `GET`
- **Description:** Creates a new user with the following hardcoded data:
  - `name`: 'ABR'
  - `email`: 'abr@gmail.com'
  - `username`: 'abr009'
- **Response:** Returns the created user object.

### 2. Update a User

- **URL:** `/update`
- **Method:** `GET`
- **Description:** Updates the user with the username `abr009` to:
  - `name`: 'Adithya B R'
  - `username`: 'ABR'
- **Response:** Returns the updated user object.

### 3. Read All Users

- **URL:** `/read`
- **Method:** `GET`
- **Description:** Fetches and returns all users stored in the database.
- **Response:** Returns an array of user objects.

### 4. Read a Specific User

- **URL:** `/readone`
- **Method:** `GET`
- **Description:** Fetches and returns a user with the username `abr009`.
- **Response:** Returns the user object with the specified username.

### 5. Delete a User

- **URL:** `/delete`
- **Method:** `GET`
- **Description:** Deletes the user with the username `ABR` from the database.
- **Response:** Returns the deleted user object.

## Technologies Used

- **Node.js**: For server-side scripting.
- **Express.js**: To handle routing and HTTP requests.
- **Mongoose**: For MongoDB object modeling.


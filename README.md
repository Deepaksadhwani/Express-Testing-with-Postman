# Express with Testing Postman

This project is a simple Express.js application that manages a list of users and their kidney health status. The application provides basic CRUD operations using HTTP methods and can be tested using Postman.

## Project Structure

- `index.js`: The main file that sets up and runs the Express server.
- `package.json`: Contains the project dependencies and scripts.

## Endpoints

### GET /

Retrieve the health status of kidneys for the user "rocky".

- **URL**: `/`
- **Method**: `GET`
- **Success Response**:
  - **Code**: 200
  - **Content**:
    ```json
    {
      "numberOfKidneys": 2,
      "numberOfHealthyKidneys": 1,
      "numberOfUnhealthyKidneys": 1
    }
    ```

### POST /

Add a new kidney status for the user "rocky".

- **URL**: `/`
- **Method**: `POST`
- **Body**:
  - **Content**:
    ```json
    {
      "isHealthy": true
    }
    ```
- **Success Response**:
  - **Code**: 200
  - **Content**:
    ```json
    {
      "msg": "Done!"
    }
    ```

### PUT /

Update the health status of all kidneys for the user "rocky".

- **URL**: `/`
- **Method**: `PUT`
- **Body**:
  - **Content**:
    ```json
    {
      "healthy": true
    }
    ```
- **Success Response**:
  - **Code**: 200
  - **Content**:
    ```json
    {
      "msg": "All kidneys updated to healthy!"
    }
    ```

### DELETE /

Remove all kidneys for the user "rocky".

- **URL**: `/`
- **Method**: `DELETE`
- **Success Response**:
  - **Code**: 200
  - **Content**:
    ```json
    {
      "msg": "All kidneys removed!"
    }
    ```


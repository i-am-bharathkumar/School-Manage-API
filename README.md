## live API link
[Click here to visit Live API](https://school-manage-api-1.onrender.com)

# School Management API

This project provides a Node.js API for managing school data. It allows users to add new schools and retrieve a list of schools sorted by proximity to a given location. The API is built with Node.js, Express, MySQL, and uses Haversine Formula for calculating distances.

## Features

1. **Add School**: Add a new school to the database.
2. **List Schools**: Retrieve a list of schools sorted by proximity to a user-specified location (latitude and longitude).

## Technologies Used

- **Node.js**: JavaScript runtime for building the API.
- **Express.js**: Web framework for Node.js.
- **MySQL**: Relational database for storing school data.
- **Haversine Formula**: For calculating the distance between geographical coordinates.

## API Endpoints

### 1. Add School
- **Endpoint**: `/api/addSchool`
- **Method**: `POST`
- **Request Body**:
    ```json
    {
        "name": "School Name",
        "address": "School Address",
        "latitude": "12.9716",
        "longitude": "77.5946"
    }
    ```
- **Response**:
    ```json
    {
        "message": "School added successfully",
        "school": {
            "id": 1,
            "name": "School Name",
            "address": "School Address",
            "latitude": 12.9716,
            "longitude": 77.5946
        }
    }
    ```

### 2. List Schools
- **Endpoint**: `/api/listSchools`
- **Method**: `GET`
- **Query Parameters**:
    - `latitude`: Latitude of the user's location.
    - `longitude`: Longitude of the user's location.
  
  Example: `/api/listSchools?latitude=12.9716&longitude=77.5946`

- **Response**:
    ```json
    [
        {
            "id": 1,
            "name": "School Name",
            "address": "School Address",
            "latitude": 12.9716,
            "longitude": 77.5946,
            "distance": 0.5
        },
        {
            "id": 2,
            "name": "Another School",
            "address": "Another Address",
            "latitude": 12.9616,
            "longitude": 77.5846,
            "distance": 1.2
        }
    ]
    ```

## Setup and Installation

### Prerequisites

- Node.js (v14 or higher)
- MySQL

### 1. Clone the repository
```bash
git clone https://github.com/i-am-bharathkumar/School-Manage-API.git
cd School-Manage-API

# Secure File Server

This project is a simple Node.js-based secure file server that includes user authentication for accessing restricted pages. It uses Express.js for handling routes, Morgan for logging, and Express-Session for session management. Users must log in with a predefined password to access protected content. The project includes static HTML files for the login and course pages.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [License](#license)

## Features

- **User Authentication**: Secure login with a predefined password.
- **Session Management**: Sessions to manage user authentication state.
- **Static File Serving**: Serves static HTML files for login and protected content.
- **Middleware**: Utilizes middleware for logging and URL encoding.

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/secure-file-server.git
    cd secure-file-server
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

## Usage

1. **Run the server**:

    ```bash
    node server.js
    ```

2. **Access the application**:

    - Open your web browser and go to: [http://localhost:4000/login](http://localhost:4000/login)

3. **Login**:

    - Enter the predefined password to access the protected content at [http://localhost:4000/node-course](http://localhost:4000/node-course).

## Project Structure

secure-file-server/
│
├── public/
│ ├── login.html
│ └── node-course.html
│
├── .gitignore
├── package.json
├── package-lock.json
└── server.js


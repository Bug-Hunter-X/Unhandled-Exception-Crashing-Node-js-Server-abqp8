# Unhandled Exception Crashing Node.js Server

This repository demonstrates a common issue in Node.js applications: unhandled exceptions causing server crashes.  The `server.js` file showcases a server that fails to handle an unexpected error, leading to its termination. The `serverSolution.js` file presents the solution using error handling mechanisms.

## Problem

The server throws an error when accessing the `/error` route.  Because the error isn't caught, Node.js terminates the process, resulting in downtime.

## Solution

The solution involves implementing a `try...catch` block to gracefully handle exceptions.  This prevents the server from crashing and allows for more robust error management, potentially including logging or sending error responses to the client.

## How to Run

1. Clone this repository.
2. Navigate to the directory.
3. Run `node server.js` (for the buggy version) or `node serverSolution.js` (for the fixed version).
4. Access `http://localhost:3000/` and `http://localhost:3000/error` to see the behavior.
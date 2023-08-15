# Frontend Setup Guide

This guide will help you set up and run the frontend for your Next.js application. Make sure you have the backend server set up and running as well. Follow these steps carefully to get started.

## Prerequisites

- Node.js and npm installed.
- Backend server set up and running. Refer to [Backend Setup Guide](https://github.com/juzoace/kpvocal-backend) for more details.

## Getting Started

1. Clone this repository to your local machine.
2. Navigate to the project directory.

## Installation

1. Install the project dependencies using the following command:



## Configuration

1. Create a `.env` file in the root directory based on the `sample.env.local` file provided.
2. Set the `NEXT_PUBLIC_API_BASE_URL` to the base URL of your local backend server. For example:
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001


## Running the Frontend

1. Start the development server using the following command:
npm run start

The frontend should now be accessible at `http://localhost:3000`.

## Additional Information

- The `sample.env` file provides an example of the environment variables needed for the frontend to communicate with the backend server.
- Modify the `.env` file as needed for your specific environment and backend server settings.

## Support and Issues

If you encounter any issues or need assistance, feel free to open an issue on this repository.



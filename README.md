# System Components API

You can use this API to see the next features of the system it is running in:

- Amount of CPU's.
- Amount of processes running.
- Amount of Threads.
- Bus Type.
- Amount of RAM.

## Dependencies

- express
- systeminformation
- body-parser
- dotenv
- nodemon

## Scripts to run

To properly generate the `node_modules` folder, write `npm i` in the command prompt.

To run the app, write `npm start` in the command prompt.

## Enviromental Variables

The app it's made to run in the port `6001` by default. If you want to use another port, just have to create an `.env` variable, such as `PORT={port}`
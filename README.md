![SportSee logo](./src/assets/logo/sportsee_logo.svg)

# SportSee

SportSee is a startup in sport coaching. They have a web platform that allows users to track their training. This repository holds a new version of the user dashboard.

## Backend installation:

### Prerequisites:

- [NodeJS (**version 12.18**)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

If you are working with several versions of NodeJS, we recommend you install [nvm](https://github.com/nvm-sh/nvm). This tool will allow you to easily manage your NodeJS versions.

### Launching the project:

- Fork the repository
- Clone it on your computer.
- The `yarn` command will allow you to install the dependencies.
- The `yarn dev` command will allow you to run the micro API.

For more information about the backend installation, you can check out this [link](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard).

## Frontend installation:

### Prerequisites:

- [Node](https://nodejs.org/en/download/)
- [Recharts](https://recharts.org/en-US/api)
- [Axios](https://axios-http.com/fr/docs/intro)
- [npm](https://www.npmjs.com/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Launching the project:

- `git clone https://github.com/tamoroso/P12_SportSee_112022` to clone the repository.
- `npm install` to install the dependencies.
- `npm start` to launch the frontend on port 3001 ([http://localhost:3001](http://localhost:3001/))

There is mocked data integrated to the project. If you want to operate this mode, you will need to create a `.env` file and add `REACT_APP_ENVIRONMENT  =  "dev"`. The app will use API url by default.

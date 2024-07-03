# ReactJS Webpack App

A ReactJS application configured with Webpack and tested using Cypress.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Building for Production](#building-for-production)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (>=14.x.x)
- npm (>=6.x.x) or yarn (>=1.x.x)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/aminvb12/Comeon-group-assignment.git
   cd Comeon-group-assignment
   ```

2. **Install dependencies:**

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

### Running the Application

To run the application in development mode with hot reloading:

```bash
npm start
```

Or with yarn:

```bash
yarn start
```

The application will be available at `http://localhost:3000`.

### Building for Production

To create a production build of the application:

```bash
npm run build
```

Or with yarn:

```bash
yarn build
```

The production-ready files will be in the `dist` directory.

### Running Tests

#### Cypress Tests

To run Cypress end-to-end tests:

1. **Start the application:**

   ```bash
   npm start
   ```

   Or with yarn:

   ```bash
   yarn start
   ```

2. **Run Cypress:**

   ```bash
   npm test
   ```

   Or with yarn:

   ```bash
   yarn test
   ```

   This will execute the Cypress Test Runner test suites and generate test report in which you can find it in reports directory in cypress directory.

### Project Structure

```
react-webpack-cypress-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   ├── assets/
│   ├── context/
│   ├── hoc/
│   ├── hooks/
│   ├── organism/
│   ├── service/
│   ├── view/
│   ├── App.js
│   ├── index.js
│   └── ...
├── cypress/
│   ├── integration/
│   ├── fixtures/
│   ├── plugins/
│   └── support/
├── .gitignore
├── package.json
├── webpack.config.js
└── README.md
```

### Future Improvements

```
1- Improve search functionality in order to execute specific API call for a better search experience
2- Improve filter functionality in order to execute specific API call for a better filter experience
3- Establish CI/CD pipeline for test, report and deployment
4- Connect tools like XRay to Cypress core engine for better QA automation and Task management
```

### Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests to us.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

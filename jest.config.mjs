// jest.config.js

const defaults = {
    roots: ["<rootDir>/src/tests"], // Replace 'src/tests' with your desired folder
    testMatch: [
        "**/?(*.)+(spec|test).+(ts|tsx|mjs|js)", // This line is optional if you're happy with the default pattern
    ],
    // other configurations...
    transform: {
        "^.+\\.(js|jsx|ts|mjs|cjs|tsx)$": "babel-jest",
    },
};

export default defaults;

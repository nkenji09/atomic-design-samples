module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript",
  testMatch: ["**/*.spec.[jt]s?(x)"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@atoms/(.*)$": "<rootDir>/src/components/atoms/$1",
    "^@molecules/(.*)$": "<rootDir>/src/components/molecules/$1",
    "^@organisms/(.*)$": "<rootDir>/src/components/organisms/$1",
    "^@templates/(.*)$": "<rootDir>/src/components/templates/$1",
  },
};

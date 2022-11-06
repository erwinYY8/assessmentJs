module.exports = {
  testPathIgnorePatterns: ["/__helpers__/"],
  globals: {
    TEST_LOCATION: process.env.TEST_LOCATION || "../index.js"
  }
};

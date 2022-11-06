# JS Assessment

This will assess your familiarity with vanilla Javascript. It will mainly test your ability and understanding working with collections.

It will cover the following concepts:

- built in array methods for iteration
- iteration techniques for including / excluding / changing data
- hash maps / lookup tables
- higher order functions / first class functions
- type safety
- object equality, compare by reference vs value

**Requirements**

- You are not allowed to use any libraries in your solutions
- You are not allowed to modify the test file, only `./index.js`
- es6+/es2015+ is preferred, but you will not be penalised for using es5

**What to do**

- install with `npm install --production`
- Fill out `./index.js` to make the tests in `__tests__/index.js` pass
- Run the tests once with `npm run test`
- Run the tests continuously with `npm run test:watch` while you develop

**Scoring**

- Each problem has an associated score. You can get partial points even if your solution does not pass the test.
- If you're struggling with finding a solution, try and add comments explaining your approach, as this
  can earn you points as well

**Assessment Criteria**

- Declarative solutions are preferred over imperative ones
- Try to avoid introducing local variables unless required
- Clean, readable solutions are preferred over performant ones. No need to optimise prematurely.
- New data is preferred over mutations, unless otherwise specified in the problem description

### Problem 1 - stripPrivateProperties - 2 points

Given an array of objects, create a new array where the objects inside don't include the supplied
properties.

Note: object mutation is fine here.

### Problem 2 - excludeByProperty - 2 points

Given an array of objects, create a new array which excludes objects based on a supplied property.

### Problem 3 - sumDeep - 3 points

Compute sums based on deep properties.

### Problem 4 - applyStatusColor - 4 points

Create a function which creates an array of objects where
each object includes its matching status code. The association between
colors and status codes are supplied as the first argument where
the keys identify the colors, and the values are arrays of status codes matching the color.
You can assume that a status code can only belong to one color.

Constraints

- Since there are so many status codes - we want a scalable solution, so you are not allowed to use `if` or `switch` statements
  to find the appropriate color.
- If making tradeoffs between space and time here, optimise for time

### Problem 5 - createGreeting - 2 points

Figure out what to do from the test.

### Problem 6 - setDefaults - 3 points

Create a function which adds default properties to an object if necessary

### Problem 7 - fetchUserByNameAndUsersCompany - 5 points

Create a function that fetches a user by name, the user's company and a status.

- The services to fetch the data are given and can be located in `./__tests__/__helpers__/p7.js`
- We want the data to be returned as fast as possible

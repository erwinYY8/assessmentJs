
const utils = require('../index')

describe("problem 1 (stripPrivateProperties)", () => {
  test("strip private properties", () => {
    expect(
      utils.stripPrivateProperties(
        ["numberId", "age"],
        [
          {
            userName: "jokey",
            email: "jokey@mail.com",
            numberId: "123456",
            age: 29
          },
          {
            userName: "kuky",
            email: "kuky@mail.com",
            numberId: "12345678",
            age: 35
          },
        ]
      )
    ).toEqual([
      {
        userName: "jokey",
        email: "jokey@mail.com"
      },
      {
        userName: "kuky",
        email: "kuky@mail.com"
      },
    ]);
  });
});


describe("problem 2 (excludeByProperty)", () => {
  test("exclude by the specified property", () => {
    expect(
      utils.excludeByProperty("exclude", [
        { color: "red" },
        { color: "green" },
        { color: "blue", exclude: true },
        { color: "pink" }
      ])
    ).toEqual([
      { color: "red" },
      { color: "green" },
      { color: "pink" }
    ]);
  });
});


describe("problem 3 (sumDeep)", () => {
  test("should calculate the total of `num` from `groups`", () => {
    expect(
      utils.sumDeep([
        {
          groups: [{ num: 1 }, { num: 4 }, { num: 6 }],
        },
        {
          groups: [{ num: 0 }, { num: 1 }, { num: 3 }],
        },
      ])
    ).toEqual([{ groups: 11 }, { groups: 4 }]);
  });
});


describe("problem 4 (applyStatusColor)", () => {
  test("a collection of apply status color", () => {
    expect(
      utils.applyStatusColor(
        {
          blank: [100, 200],
          blue: [300, 301],
        },
        [
          {
            status: 100,
          },
          {
            status: 200,
          },
          {
            status: 300,
          },
          {
            status: 301,
          },
          {
            status: 300,
          },
          {
            status: 302,
          },
        ]
      )
    ).toEqual([
      {
        status: 100,
        color: "blank",
      },
      {
        status: 200,
        color: "blank",
      },
      {
        status: 300,
        color: "blue",
      },
      {
        status: 301,
        color: "blue",
      },
      {
        status: 300,
        color: "blue",
      },
    ]);
  });
});


describe('problem 5 (createGreeting)', () => {
  test('It is more convenient to greet by means of create a function', () => {
    const greet = (greeting, name) => `${greeting} ${name}`;
    const sayThanks = utils.createGreeting(greet, 'thanks');
    const sayPolite = utils.createGreeting(greet, 'polite');

    expect(sayThanks('jokey')).toEqual('thanks jokey');
    expect(sayPolite('kuky')).toEqual('polite kuky');
  });
});

describe("problem 6 (setDefaults)", () => {
  test("ensure has that default props", () => {
    const applyDefaults = utils.setDefaults({ promotion: true });

    expect(
      applyDefaults({
        name: "jokey",
        promotion: false,
      })
    ).toEqual({
      name: "jokey",
      promotion: false,
    });

    expect(
      applyDefaults({
        name: "kuky",
      })
    ).toEqual({
      name: "kuky",
      promotion: true,
    });
  });
});


describe('problem 7 (fetchUserByNameAndUsersCompany)', () => {
  const {
    services, company, status, userInfo,
  } = require('./__helpers__/p7');

  test('asyn fetches a user by name, the users company and a status', () =>
    utils.fetchUserByNameAndUsersCompany('jokey', services).then(res =>
      expect(res).toEqual({
        company,
        status,
        user: userInfo[0]
      })
    )
  );
});
import * as utils from '../index'

describe("problem 1 (stripPrivateProperties)", () => {
  test("should strip private properties", () => {
    expect(
      utils.stripPrivateProperties(
        ["password", "token"],
        [
          {
            name: "stan",
            email: "stan@smith.test",
            password: "secret",
            token: "123",
          },
          {
            name: "fran",
            email: "sran@smith.test",
            password: "secret",
            token: "123",
          },
        ]
      )
    ).toEqual([
      {
        name: "stan",
        email: "stan@smith.test",
      },
      {
        name: "fran",
        email: "sran@smith.test",
      },
    ]);
  });
});
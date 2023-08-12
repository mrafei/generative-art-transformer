import noop from "@/utils/noop";

describe("noop util", () => {
  test("I expect returned result from noop to be empty.", () => {
    expect(noop()).toBeUndefined();
  });
});

import QS from "@/utils/qs";

describe("QS util", () => {
  describe("Given an empty object", () => {
    test("I expect stringified string to be empty.", () => {
      expect(QS.stringify({})).toEqual("");
    });
  });
  describe("Given a params object", () => {
    test("I expect correct stringified result returned.", () => {
      expect(QS.stringify({ foo: "bar" })).toEqual("foo=bar");
    });
  });

  describe("Given params object with 2 keys", () => {
    test("I expect correct stringified result returned separated by &.", () => {
      expect(QS.stringify({ foo: "bar", name: "bob" })).toEqual(
        "foo=bar&name=bob"
      );
    });
  });

  describe("Given a params object and addQueryPrefix option set to true", () => {
    test("I expect correct stringified result with prefix returned.", () => {
      expect(QS.stringify({ foo: "bar" }, { addQueryPrefix: true })).toEqual(
        "?foo=bar"
      );
    });
  });
});

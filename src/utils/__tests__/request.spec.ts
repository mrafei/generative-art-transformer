import request from "@/utils/request";

describe("request util", () => {
  describe("Given a REST api url and empty params", () => {
    test("I expect request to perform GET and return result.", async () => {
      const url = "https://fakestoreapi.com/products/1";
      const result = await request<{ id: number }>({ url });
      expect(result?.id).toEqual(1);
    });
  });
});

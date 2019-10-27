import { getBarsApi } from "../api";

test("test API with key ok", async () => {
  return getBarsApi().then(data => {
    expect(data).not.toBe(undefined);
  });
});

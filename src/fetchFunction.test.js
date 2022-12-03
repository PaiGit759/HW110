import { fetchData } from "./fetchFunction.js";

test("the data.login is pjhyett", () => {
  return fetchData().then((data) => {
    expect(data.login).toBe("pjhyett");
  });
});

test("the data.login is pjhyett 1", async () => {
  const data = await fetchData();
  expect(data.login).toBe("pjhyett");
});

test("the fetch fails with an error", async () => {
  expect.assertions(1);
  try {
    await fetchData();
  } catch (e) {
    expect(e).toMatch("error");
  }
});

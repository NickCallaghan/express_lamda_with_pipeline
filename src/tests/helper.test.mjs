import { add_two } from "./helper.mjs";

describe("add_two", () => {
    it("adds two numbers", () => {
        expect(add_two(1, 2)).toBe(5);
    });
});

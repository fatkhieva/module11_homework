import { multiply } from "../index.js";
import { getPercents } from "../index.js";

xdescribe("test multiply", () => {
  it("multiply 1 * 0 to equal 0", () => {
    const result = multiply(1, 0);
    expect(result).toBe(0);
  }),
    it("multiply 1 * 1 to equal 1", () => {
      const result = multiply(1, 1);
      expect(result).toBe(1);
    });
});





describe("test percent", () => {
  // successful tests
  it("number 200 / 100 multiply 30 to equal 60", () => {
    const result = getPercents(30, 200);
    expect(result).toBe(60);
  }),
  it("number 100 / 100 multiply 50 to equal 50", () => {
    const result = getPercents(50, 100);
    expect(result).toBe(50);
  }),
  // unsuccessful tests
  it("number 200 / 100 multiply 30 to equal 80", () => {
    const result = getPercents(30, 200);
    expect(result).toBe(80);
  }),
  it("number 100 / 100 multiply 50 to equal 40", () => {
    const result = getPercents(50, 100);
    expect(result).toBe(40);
  }), 
  // corner tests
  it("number 50 / 100 multiply 0 to equal 0", () => {
    const result = getPercents(0, 50);
    expect(result).toBe(0);
  }),
    it("number 0 / 100 multiply 80 to equal 0", () => {
      const result = getPercents(80, 0);
      expect(result).toBe(0);
  });
  it("number 0 / 0 multiply 0 to equal 0", () => {
      const result = getPercents(0, 0);
      expect(result).toBe(0);
  });
    // unit tests
  it("number 0.05 / 100 multiply 80 to equal 0.04", () => {
      const result = getPercents(80, 0.05);
      expect(result).toBe(0.04);
  });
  it("number -100 / 100 multiply 50 to equal -50", () => {
    const result = getPercents(50, -100);
    expect(result).toBe(-50);
  });
  it("number 400 / 100 multiply Infinity to equal Infinity", () => {
    const result = getPercents(Infinity, 400);
    expect(result).toBe(Infinity);
});
});

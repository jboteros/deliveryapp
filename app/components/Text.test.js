import { Platform } from "react-native";
import { normalize } from "./Text";

describe("normalize text iOS", () => {
  beforeEach(() => {
    jest.resetModules();
    Object.defineProperty(Platform, "OS", {
      get: jest.fn(() => "ios"),
    });
  });

  it("normalize text iOS 10 expect 18", () => {
    expect(normalize(10, true)).toEqual(18);
  });

  it("normalize text iOS 12 expect 22", () => {
    expect(normalize(12, true)).toEqual(22);
  });

  it("!normalize text iOS 10 expect 10", () => {
    expect(normalize(10, false)).toEqual(10);
  });

  it("!normalize text iOS 12 expect 12", () => {
    expect(normalize(12, false)).toEqual(12);
  });
});

describe("normalize text Android", () => {
  beforeEach(() => {
    jest.resetModules();
    Object.defineProperty(Platform, "OS", {
      get: jest.fn(() => "android"),
    });
  });

  it("normalize text Android 10 expect 16", () => {
    expect(normalize(10, true)).toEqual(16);
  });

  it("normalize text Android 12 expect 20", () => {
    expect(normalize(12, true)).toEqual(20);
  });

  it("!normalize text Android 10 expect 10", () => {
    expect(normalize(10, false)).toEqual(10);
  });

  it("!normalize text Android 12 expect 12", () => {
    expect(normalize(12, false)).toEqual(12);
  });
});

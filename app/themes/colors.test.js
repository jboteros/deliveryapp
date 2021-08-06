import { colors } from "./colors";

describe("colors light", () => {
  it("light 0%", () => {
    expect(colors.alphaLight(0.0)).toEqual("rgba(255,255,255,0)");
  });
  it("light 25%", () => {
    expect(colors.alphaLight(0.25)).toEqual("rgba(255,255,255,0.25)");
  });
  it("light 50%", () => {
    expect(colors.alphaLight(0.5)).toEqual("rgba(255,255,255,0.5)");
  });
  it("light 100%", () => {
    expect(colors.alphaLight(1.0)).toEqual("rgba(255,255,255,1)");
  });
});

describe("colors dark", () => {
  it("dark 0%", () => {
    expect(colors.alphaDark(0.0)).toEqual("rgba(0,0,0,0)");
  });
  it("dark 25%", () => {
    expect(colors.alphaDark(0.25)).toEqual("rgba(0,0,0,0.25)");
  });
  it("dark 50%", () => {
    expect(colors.alphaDark(0.5)).toEqual("rgba(0,0,0,0.5)");
  });
  it("dark 100%", () => {
    expect(colors.alphaDark(1.0)).toEqual("rgba(0,0,0,1)");
  });
});

describe("colors primary", () => {
  it("dark 0%", () => {
    expect(colors.alphaPrimary(0.0)).toEqual("rgba(50,68,79,0)");
  });
  it("dark 25%", () => {
    expect(colors.alphaPrimary(0.25)).toEqual("rgba(50,68,79,0.25)");
  });
  it("dark 50%", () => {
    expect(colors.alphaPrimary(0.5)).toEqual("rgba(50,68,79,0.5)");
  });
  it("dark 100%", () => {
    expect(colors.alphaPrimary(1.0)).toEqual("rgba(50,68,79,1)");
  });
});

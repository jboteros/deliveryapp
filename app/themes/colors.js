//  @flow

const primary = "#0e1e2b";
const accent = "#00a3e0";
const light = "#fff";
const dark = "#32444f";
const backgroundApp = "#f4f4f4";

const alphaLight = (opacity: number): string => {
  return `rgba(255,255,255,${opacity})`;
};
const alphaDark = (opacity: number): string => {
  return `rgba(0,0,0,${opacity})`;
};
const alphaPrimary = (opacity: number): string => {
  return `rgba(50,68,79,${opacity})`;
};

export const colors = {
  primary,
  accent,
  light,
  dark,
  backgroundApp,
  alphaLight,
  alphaDark,
  alphaPrimary,
};

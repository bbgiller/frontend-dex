export const GlucoseRanges = (glucoseNum: number) => {
  if (glucoseNum < 80) {
    return "low";
  } else if (glucoseNum > 150) {
    return "high";
  }
  return "normal";
};

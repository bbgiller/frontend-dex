export const GlucoseRange = (glucose: number): string => {
  if (glucose < 70) {
    return "low";
  } else if (glucose > 150) {
    return "high";
  }
  return "normal";
};

export const timeFormat = (time: string) => {
  const formattedTime = new Date(time + "Z").toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return formattedTime;
};

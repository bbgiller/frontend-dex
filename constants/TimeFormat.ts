export const timeFormat = (time: string) => {
  const newTime = time[time.length - 1] !== "Z" ? time + "Z" : time;
  const formattedTime = new Date(newTime).toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return formattedTime;
};

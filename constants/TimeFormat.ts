export const timeFormat = (time: string, isHeader = false) => {
  const newTime = time[time.length - 1] !== "Z" ? time + "Z" : time;
  const formattedTime = !isHeader
    ? new Date(newTime).toLocaleString("en-US", {
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
    : new Date(newTime).toLocaleString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
  return formattedTime;
};

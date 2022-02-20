/**
 * @function formatDate
 * @params (none)
 * @return string
 * usage: generate new Date Object at the time of calling
 * then return a string of date in format DD/MM/YYYY hh:mm
 */
const formatDate = (): string => {
  const dt = new Date();
  return `${(dt.getMonth() + 1).toString().padStart(2, "0")}/${dt
    .getDate()
    .toString()
    .padStart(2, "0")}/${dt.getFullYear().toString().padStart(4, "0")} ${dt
    .getHours()
    .toString()
    .padStart(2, "0")}:${dt.getMinutes().toString().padStart(2, "0")}`;
};

export default formatDate;

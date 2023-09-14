export const FormatDate = (date) => {
  const time = new Date(date);
  return time.toDateString().slice(3);
};
export const FormatPrice = (price) => {
  return (price = price.toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  }));
};

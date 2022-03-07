
export const formatMultipleOptionsData = (data = []) => {
  const formatted = [];

  if (typeof data !== "undefined" && data !== null && data.length > 0) {
    data.forEach((item) => {
      formatted.push(item.id);
    });
  }

  return formatted;
};

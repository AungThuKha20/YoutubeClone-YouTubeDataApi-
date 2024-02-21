export const api_key = "AIzaSyALwz8CnYROCno3w6tvp6wGDP7VMFpWVaQ";

export const viewConverter = (value) => {
  if (value >= 1000000) {
    return (value / 1000000).toFixed(1) + "M";
  } else if (value >= 1000) {
    return (value / 1000).toFixed(1) + "K";
  } else {
    return value;
  }
};

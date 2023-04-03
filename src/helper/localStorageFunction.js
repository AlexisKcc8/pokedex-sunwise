export const getValueToLocaleStorage = (key) =>
  JSON.parse(localStorage.getItem(key));
export const setValueToLocaleStorage = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));

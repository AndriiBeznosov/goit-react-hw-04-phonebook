export const SetItemLocalStorage = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item));
  return;
};

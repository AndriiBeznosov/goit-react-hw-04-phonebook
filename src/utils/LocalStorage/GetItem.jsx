export const GetItemLocalStorage = item => {
  const contactsList = JSON.parse(localStorage.getItem(item));
  return contactsList;
};

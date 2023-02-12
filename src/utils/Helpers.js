export const isValidPhoneNumFor_UAE = (phoneNum) => {
  let cleaned = phoneNum.replace(/\D/g, "");
  let regExp = /^(?:\+971|00971|0)(?:2|3|4|6|7|9|50|51|52|55|56)[0-9]{7}$/;
  let isValid = regExp.test(cleaned);
  return isValid;
};
export const isValidPhoneNumFor_PK = (phoneNum) => {
  let cleaned = phoneNum.replace(/\D/g, "");
  let regExp = /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/;
  let isValid = regExp.test(cleaned);
  return isValid;
};
export const calculateSum = (array, property) => {
  const total = array.reduce((accumulator, object) => {
    return accumulator + object[property];
  }, 0);
  return total;
};

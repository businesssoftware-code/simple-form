
export const isValidMobile = (num: string) => {
  const regex = /^[0-9]{10}$/; // only 10 digits
  return regex.test(num);
};
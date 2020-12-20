export const isObjectNotEmpty = obj => obj && Object.keys(obj).length > 0;

export const isObjectNotNull = obj => {
  if (isObjectNotEmpty(obj)) {
    const [firstItem] = Object.keys(obj);
    return !!obj[firstItem];
  }
  return false;
};

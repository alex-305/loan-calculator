export const numberToDollars = (n: number): string => {
  const num = n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return `$${num}`;
};

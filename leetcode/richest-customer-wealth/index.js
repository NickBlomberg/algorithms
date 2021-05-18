/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = function (accounts) {
  const customerTotal = (customerAccounts) =>
    customerAccounts.reduce((a, b) => (a += b));

  const totals = accounts.map((customer) => customerTotal(customer));

  return Math.max(...totals);
};

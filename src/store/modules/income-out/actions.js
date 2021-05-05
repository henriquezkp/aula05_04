export function getIncomeOut(payload) {
  return {
    type: 'income-out/GET',
    payload,
  };
}

export function setIncomeOut(payload) {
  return {
    type: 'income-out/SET',
    payload,
  };
}

export function getIncomeIn(payload) {
  return {
    type: 'income-in/GET',
    payload,
  };
}

export function setIncomeIn(payload) {
  return {
    type: 'income-in/SET',
    payload,
  };
}

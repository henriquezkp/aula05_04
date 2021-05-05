export function setAlert(payload) {
  return {
    type: 'alert/SET',
    payload,
  };
}

export function getAlert(payload) {
  return {
    type: 'alert/GET',
    payload,
  };
}

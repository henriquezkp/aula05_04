const defaultState = false;

export default function reducerAlert(state = defaultState, action) {
  switch (action.type) {
    case 'alert/GET':
      return state;

    case 'alert/SET':
      return action.payload;

    default:
      return state;
  }
}

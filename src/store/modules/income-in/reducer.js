const defaultState = [];

export default function incomeIn(state = defaultState, action) {
  switch (action.type) {
    case 'income-in/GET':
      return state;

    case 'income-in/SET':
      const draft = [...state, action.payload];
      return draft;

    default:
      return state;
  }
}

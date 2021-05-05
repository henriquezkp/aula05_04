const defaultState = [];

export default function incomeOut(state = defaultState, action) {
  switch (action.type) {
    case 'income-out/GET':
      return state;

    case 'income-out/SET':
      const draft = [...state, action.payload];
      return draft;

    default:
      return state;
  }
}

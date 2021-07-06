export const CheckboxReducer = (state, action) => {
  switch (action.type) {
    case 'HANDLER_CHECKBOX':
      return { ...state, value: !state.value };
    default:
      return state;
  }
};

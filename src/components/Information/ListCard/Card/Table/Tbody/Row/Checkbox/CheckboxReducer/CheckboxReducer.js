export const CheckboxReducer = (state, action) => {
  switch (action.type) {
    case 'HANDLER_CHECKBOX':
      return { ...state, checked: !state.checked };
    default:
      return state;
  }
};

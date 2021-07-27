export const CheckboxReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_CHECKBOX':
      return { ...state, value: !state.value };
    case 'CHECKBOX_ON':
      return { ...state, value: true };
    case 'CHECKBOX_OFF':
      return { ...state, value: false };
    case 'CHECKBOX_GLOBAL_ON':
      return { ...state, value: true };
    case 'CHECKBOX_GLOBAL_OFF':
      return { ...state, value: false };
    default:
      return state;
  }
};

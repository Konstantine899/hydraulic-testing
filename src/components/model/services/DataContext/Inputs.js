function inputDefault() {
  return {
    nameOrg: '',
    address: '',
    applicant: '',
    implementer: '',
  };
}

function resetInput() {
  return {
    nameOrg: '',
    address: '',
    applicant: '',
    implementer: '',
  };
}

function handlerSubmitForm(value) {
  return {
    nameOrg: value.nameOrg,
    address: value.address,
    applicant: value.applicant,
    implementer: value.implementer,
  };
}

function resetCards() {
  return { nameOrg: '', address: '', applicant: '', implementer: '' };
}

export { inputDefault, resetInput, handlerSubmitForm, resetCards };

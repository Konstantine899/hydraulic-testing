const handlerSubmitForm = (value) => ({
  nameOrg: value.nameOrg,
  address: value.address,
  applicant: value.applicant,
  implementer: value.implementer,
});

export { handlerSubmitForm };

import React from 'react';

import './Form.scss';

function Form(props) {
  return (
    <form noValidate>
      <div className="input_wrapper">
        <input type="text" />
        <input type="text" />
      </div>
      <div className="input_wrapper">
        <input type="text" />
        <input type="text" />
      </div>
    </form>
  );
}

export default Form;

import React from 'react';

export const Form = ({ children, ...props }) => {
  return <form {...props}>{children}</form>;
};

import React, { ReactElement } from 'react';

interface IfProps {
  children: ReactElement;
  condition: boolean;
}

const If: React.FC<IfProps> = ({ children, condition }) => {
  return condition ? children : null;
};

export default If;

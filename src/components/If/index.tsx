import React from 'react';

interface IfProps {
  children: any;
  condition: boolean;
}

const If: React.FC<IfProps> = ({ children, condition }) => {
  return condition ? children : null;
};

export default If;

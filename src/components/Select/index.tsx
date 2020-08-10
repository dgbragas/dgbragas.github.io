import React, { SelectHTMLAttributes } from 'react';

import * as S from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  defaultValue: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const Select: React.FC<SelectProps> = ({
  name,
  label,
  defaultValue,
  options,
  ...rest
}) => (
  <S.FormGroup>
    <label htmlFor={name}>{label}</label>
    <select id={name} value={defaultValue} {...rest}>
      {options.map(option => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  </S.FormGroup>
);

export default Select;

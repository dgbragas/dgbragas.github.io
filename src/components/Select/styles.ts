import styled from 'styled-components';

export const FormGroup = styled.div`
  label {
    color: ${({ theme: { colors } }) => colors.texts};
    display: block;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 4px;
  }

  select {
    color: ${({ theme: { colors } }) => colors.texts};
    border: 1px solid rgba(252, 252, 252, 0.3);
    border-radius: 5px;
    background-color: ${({ theme: { colors } }) => colors.darkBody};
    height: 56px;
    padding: 0 24px;
    width: 100%;
  }
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme: { colors } }) => colors.secondary};
  padding: 12px 0;
  width: 100%;
`;

export const Notification = styled.p`
  color: ${({ theme: { colors } }) => colors.texts};
  font-size: 14px;

  span {
    font-style: italic;
    font-weight: 700;
    margin: 0 4px;
  }

  a {
    color: ${({ theme: { colors } }) => colors.texts};
    font-weight: 700;
    margin: 0 4px;
  }
`;

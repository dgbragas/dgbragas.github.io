import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  margin: 0 auto;
  min-height: 100%;
  padding: 0 16px;
  width: 1216px;

  ${media.lessThan('huge')`
    width: 1150px;
  `}

  ${media.lessThan('large')`
    padding: 0 24px;
    width: 100%;
  `}
`;
